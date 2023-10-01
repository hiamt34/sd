
import { ProductItem, User } from "@/components/commons/product";
import Config from "@/config";
import CustomerLayout from "@/layouts/customer_layouts"
import { ApiService } from "@/services/api/http";
import { Designer } from "@/services/api/inteface/designer.interface";
import { Product } from "@/services/api/inteface/product.inteface";
import { ProductDetail } from "@/services/api/inteface/product_detail.interface";
import { designerAction } from "@/store/designer/designerSlice";
import { RootState } from "@/store/store";
import { Autocomplete, Button, ButtonBase, Checkbox, LinearProgress, TextField, withStyles } from "@mui/material"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
interface State {
    product?: Product
    productItem?: ProductDetail
    size: string
    count?: number
    designer?: Designer
    phone?: string
    name?: string,
    validName: string
    address?: string
    is_carosel: boolean,
    validPhone?: string
    validAdress?: string
    submit: string,
    province: Array<{ id: number, name: string }>
    provinceCurent: { id: number, name: string }
    district: Array<{ id: number, name: string, province_id: number }>
    districtCurent: { id: number, name: string, province_id: number }
    ward: Array<{ id: number, name: string, district_id: number }>
    wardCurent: { id: number, name: string, district_id: number }


}

const ProductDetailPage = () => {
    const [state, setState] = useState<State>({
        is_carosel: false,
        size: 'S',
        count: 1,
        validPhone: "",
        validAdress: "",
        validName: "",
        submit: "Đặt hàng",
        province: [],
        district: [],
        ward: [],
        provinceCurent: { id: 0, name: "Tỉnh/Thành phố" },
        districtCurent: { id: 0, name: 'Quận/Huyện', province_id: 1 },
        wardCurent: { id: 0, name: "Xã/Phường", district_id: 1 }

    })
    const designerState = useSelector((state: RootState) => state.designer)
    const dispatch = useDispatch()
    useEffect(() => {
        const url = window.location.href
        let product_id: any
        const match = url.match(/products\/(\d+)$/);
        if (match) {
            product_id = parseInt(match[1])
        }

        ApiService.getProduct({
            page: 1,
            pageSize: 1,
            filter: [`id=${product_id}`]
        }).then(async (response) => {
            if (response?.status === 200) {
                const province = await ApiService.getProvices()
                setState({
                    ...state,
                    productItem: response.data.payload.data[0].products_item[0],
                    product: response.data.payload.data[0],
                    designer: response.data.payload.data[0].user,
                    is_carosel: true,
                    province: province?.data?.payload ?? []
                })
                setTimeout(() => {
                    const jquery = jQuery("#collection-carousel-4-cols") as any
                    jquery.owlCarousel({
                        center: false,
                        items: 4,

                        autoplay: true,
                        autoplayTimeout: 5000,
                        margin: 25,
                        nav: true,
                        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                        dots: false,
                        responsive: {
                            1000: {
                                items: 3
                            },
                            800: {
                                items: 3
                            },
                            600: {
                                items: 2
                            },
                            0: {
                                items: 1
                            }
                        }
                    });
                }, 100)
            }
        })


    }, [])
    const onsubmit = () => {
        setState({
            ...state,
            submit: 'Đang đặt hàng'
        })
        if (!state?.name || state?.name?.length === 0) {
            setState({
                ...state,
                validName: 'Vui lòng điền tên người nhận'
            })
            return
        }
        if (!state?.phone || state?.phone?.length === 0) {
            setState({
                ...state,
                validPhone: 'Vui lòng điền số điện thoại của bạn'
            })
            return
        }

        if (!state.address || state.address.length === 0 || state.provinceCurent.id === 0 || state.districtCurent.id === 0 || state.wardCurent.id === 0) {
            setState({
                ...state,
                validAdress: 'Vui lòng điền đầy đủ thông tin địa chỉ của bạn'
            })
            return
        }
        ApiService.createOrder({
            orders: [{
                product_detail_id: state.productItem?.id as any,
                quantity: state.count as any,
                size: state.size
            }],
            address: `${state.address}_${state.phone}`,
            payment_type: 'CASH',
            province_id: state.provinceCurent.id,
            district_id: state.districtCurent.id,
            ward_id: state.wardCurent.id,
            note: "",
            phone: state.phone,
            name: state?.name ?? ""

        }).then((response) => {
            console.log('response', response.data);
            if (response.status === 201) {
                setState({
                    ...state,
                    submit: "Tạo đơn hàng thành công",
                    size: 'S',
                    count: 1,
                    validPhone: "",
                    validAdress: "",
                    province: [],
                    district: [],
                    ward: [],
                    provinceCurent: { id: 0, name: "Tỉnh/Thành phố" },
                    districtCurent: { id: 0, name: 'Quận/HuyệN', province_id: 1 },
                    wardCurent: { id: 0, name: "Xã/Phường", district_id: 1 }
                })
                setTimeout(() => {
                    dispatch(designerAction.setPhoneNumber({ phone: state.phone ?? "" }))
                    window.location.href = '/customer'
                }, 2000)

            }
        })
    }
    const refCancel = useRef<HTMLInputElement | null>(null);
    return (
        <CustomerLayout is_no_footer={true} type_class="no-top no-bottom">
            <section id="nft-item-details" aria-label="section" className="sm-mt-0">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center">
                            <div className="" >
                                <div
                                    id="item-carousel-big-type-2"
                                    className="owl-carousel wow fadeIn"

                                >

                                    <div className="nft_pic style-2" style={{ borderRadius: 5 }} >
                                        <div className="nft_pic_wrap" >
                                            <img
                                                src={`${Config.apiDomain}${state?.productItem?.photo_after.path}`}
                                                className="lazy img-fluid"
                                                alt=""
                                                style={{}}
                                            />
                                        </div>
                                    </div>
                                    <div className="nft_pic style-2" style={{ borderRadius: 5 }}>
                                        <div className="nft_pic_wrap">
                                            <img
                                                src={`${Config.apiDomain}${state?.productItem?.photo_befor.path}`}
                                                className="lazy img-fluid"
                                                alt=""
                                                style={{}}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="item_info">
                                <div className="spacer-20" />
                                <div className="d-flex flex-row">
                                    <div className='mr40  '>
                                        <h4>Designer</h4>
                                        <div className="author_list_pp" >
                                            <a href="products/design">

                                                <img
                                                    className="lazy"
                                                    src={state?.designer?.photo ? `${Config.apiDomain}${state.designer.photo.path}` : `${Config.apiDomain}${state?.designer?.photo_avatar_default}`}
                                                    alt=""
                                                />
                                                <i className="fa fa-check" />
                                            </a>
                                        </div>
                                        <div className="item_info_counts" style={{ marginLeft: 80, marginTop: 20 }}>
                                            {/* <div className="item_info_views">
                                                <i className="fa fa-eye" />
                                                250
                                            </div>
                                            <div className="item_info_like">
                                                <i className="fa fa-heart" />
                                                18
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-40" />
                                <div className="de_tab tab_simple">
                                    <h3>Hãy lựa chọn thiết kế:</h3>
                                    <div className="d-flex" >
                                        {

                                            state.is_carosel &&
                                            <div id="collection-carousel-4-cols" className="owl-carousel wow fadeIn" style={{ visibility: 'visible' }} >
                                                {
                                                    state?.product?.products_item.map((x, y) =>
                                                        <div key={y} onClick={() => setState({
                                                            ...state,
                                                            productItem: x
                                                        })}>
                                                            <ProductItem is_choose={state.productItem?.id === x.id ? 1 : 0} key={y} height={210} product_id={state?.product?.products_item[0]?.id as any} is_show_info={false} is_none_name={false} name={`Unisex look is the best ${x}`} price={180.001} imgAfter={`${Config.apiDomain}${state?.product?.products_item[y]?.photo_after?.path}`} imgBefor={`${Config.apiDomain}${state?.product?.products_item[y]?.photo_befor?.path}`} type={User.Customer} />
                                                        </div>


                                                    )
                                                }
                                            </div>

                                        }

                                    </div>

                                    <>Chủ đề:</>
                                    {state?.product?.categories.map((x, y) => <button
                                        key={y}
                                        type="button"
                                        className="btn-main"
                                        style={{ margin: 5, borderRadius: 10 }}
                                    >
                                        {x}
                                    </button>)}

                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <span> Số lượng:</span>
                                        <input
                                            type="number"
                                            onChange={(event) => {
                                                if (parseInt(event.currentTarget.value) < 1 || !event.currentTarget.value || event.currentTarget.value === '') {
                                                    return
                                                }
                                                setState({
                                                    ...state,
                                                    count: event.currentTarget.value as any
                                                })
                                            }}
                                            value={state.count}
                                            style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '35px', marginLeft: 5 }}
                                            className="hide-spinner"
                                        />
                                    </div>


                                    <div className="d-flex" style={{ alignItems: 'center', marginTop: 15, marginBottom: 5 }} >
                                        <span>Size:</span>
                                        {
                                            ['S', 'M', "L", 'XL'].map((x, y) =>
                                                <div key={y} className="d-flex wow row col-lg-1 col-md-1 col-sm-1 col-xs-1" style={{ width: '70px', margin: 4, border: `${state.size === x ? 'solid 1px red' : 'solid 1px rgba(0, 0, 0, .2)'}`, borderRadius: 5 }}>
                                                    <Button
                                                        onClick={() => setState({
                                                            ...state,
                                                            size: x
                                                        })}
                                                        style={{ backgroundColor: '#FAF6C1', borderRadius: 5 }}
                                                    >
                                                        <span style={{ color: 'black' }}>{x}</span>
                                                    </Button>
                                                </div>
                                            )
                                        }


                                    </div>
                                    <div style={{ height: '10px', marginTop: 10 }}>
                                        <p>
                                            Đơn giá : <b> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(state.product?.price ?? 250000)}</b>
                                        </p>
                                    </div>

                                    <div style={{ height: '10px', marginTop: 20 }}>
                                        <span >
                                            Tổng : <b> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(state.count ? state.count * (state.product?.price ?? 250000) : 259000)}</b>
                                        </span>
                                    </div>
                                    <br />
                                    <a
                                        href="#"
                                        className="btn-main btn-lg"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buy_now"
                                    >
                                        Mua ngay
                                    </a>
                                    &nbsp;

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="modal fade"
                id="buy_now"
                tabIndex={-1}
                aria-labelledby="buy_now"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered de-modal" >
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ref={refCancel as any}
                        />
                        <div className="modal-body" style={{ margin: 20 }}>
                            <div className="p-3 form-border">
                                <h3>Thông tin đơn hàng</h3>
                                <ProductItem height={270} product_id={state?.productItem?.id as any} is_show_info={false} is_none_name={false} name={`Unisex look is the best`} price={180.001} imgAfter={`${Config.apiDomain}${state.productItem?.photo_after.path}`} imgBefor={`${Config.apiDomain}${state.productItem?.photo_befor.path}`} type={User.Customer} />
                                Số lượng:  <b>{state.count}</b>
                                <br />
                                Size: <b>{state.size}</b>
                                <br />
                                <span >
                                    Tổng tiền : <b> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(state.count ? state.count * 259000 : 259000)}</b>
                                </span>
                                <div style={{ marginTop: 5, marginBottom: 5, }}>
                                    <p style={{ fontStyle: 'italic' }}>Vui lòng điền thông tin liên hệ của bạn</p>
                                </div>

                                <div className="de-flex" style={{ marginBottom: 10 }}>
                                    <div>Tên người nhận:</div>
                                    <input
                                        type=""
                                        style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '65%', marginLeft: 5 }}
                                        onChange={(event) => setState({
                                            ...state,
                                            validName: "",
                                            name: event.currentTarget.value
                                        })}
                                        className="hide-spinner"
                                    />
                                </div>
                                <div style={{ color: "red", fontSize: '14px', display: 'flex', justifyContent: 'right' }}>{state.validName}</div>
                                <div className="de-flex">
                                    <div>Số điện thoại:</div>
                                    <input
                                        type="number"
                                        style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '65%', marginLeft: 5 }}
                                        onChange={(event) => setState({
                                            ...state,
                                            validPhone: "",
                                            phone: event.currentTarget.value
                                        })}
                                        className="hide-spinner"
                                    />
                                </div>
                                <div style={{ color: "red", fontSize: '14px', display: 'flex', justifyContent: 'right' }}>{state.validPhone}</div>
                                <div className="de-flex" style={{ marginTop: 10 }}>
                                    <div>Địa chỉ:</div>
                                    <div className='d-flex justify-content-end' style={{ width: '85%' }} >
                                        <Autocomplete
                                            getOptionLabel={(option) => option.name}
                                            options={state.province}
                                            value={state.provinceCurent}
                                            onChange={(event, newValue) => {
                                                if (newValue) {
                                                    ApiService.getDistricts(newValue.id).then((response) => {
                                                        if (response.status === 200) {
                                                            setState({
                                                                ...state,
                                                                validAdress: "",
                                                                provinceCurent: newValue,
                                                                district: response.data.payload
                                                            })
                                                            return
                                                        }
                                                        setState({
                                                            ...state,
                                                            provinceCurent: { id: 0, name: "Vui lòng chọn lại" }
                                                        })
                                                    })


                                                }
                                            }}
                                            clearIcon={false}
                                            sx={{ width: '45%', marginRight: 1 }}
                                            renderInput={(params) =>
                                                <div ref={params.InputProps.ref}>
                                                    <input style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '100%' }} {...params.inputProps} />
                                                </div>}
                                        />
                                        <Autocomplete
                                            getOptionLabel={(option) => option.name}
                                            options={state.district}
                                            value={state.districtCurent}
                                            onChange={(event, newValue) => {
                                                if (newValue) {
                                                    ApiService.getWards(newValue.id).then((response) => {
                                                        if (response.status === 200) {
                                                            setState({
                                                                ...state,
                                                                validAdress: "",
                                                                districtCurent: newValue,
                                                                ward: response.data.payload
                                                            })
                                                            return
                                                        }
                                                        setState({
                                                            ...state,
                                                            districtCurent: { id: 0, name: "Chọn lại Tỉnh/Thành phố", province_id: 0 }
                                                        })
                                                    })


                                                }
                                            }}
                                            clearIcon={false}
                                            sx={{ width: '50%' }}
                                            renderInput={(params) =>
                                                <div ref={params.InputProps.ref}>
                                                    <input style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '100%' }} {...params.inputProps} />
                                                </div>}
                                        />
                                    </div>


                                </div>
                                <div className='d-flex justify-content-end' style={{ marginTop: 10 }} >

                                    <Autocomplete
                                        getOptionLabel={(option) => option.name}
                                        options={state.ward}
                                        value={state.wardCurent}
                                        onChange={(event, newValue) => {
                                            if (newValue) {
                                                console.log(newValue);

                                                setState({
                                                    ...state,
                                                    validAdress: "",
                                                    wardCurent: newValue,

                                                })

                                            }
                                        }}
                                        clearIcon={false}
                                        sx={{ width: '40%' }}
                                        renderInput={(params) =>
                                            <div ref={params.InputProps.ref}>
                                                <input style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '100%' }} {...params.inputProps} />
                                            </div>}
                                    />
                                    <input
                                        type=""
                                        style={{ paddingLeft: 10, border: 'solid 1px rgba(0, 0, 0, .2)', borderRadius: '10px', height: '40px', width: '65%', marginLeft: 15 }}
                                        onChange={(event) => setState({
                                            ...state,
                                            validAdress: "",
                                            address: event.currentTarget.value
                                        })}
                                        value={state.address}
                                        placeholder="Địa chỉ cụ thể:(Số nhà/ngõ/ngách)"
                                        className="hide-spinner"
                                    />
                                </div>

                                <div style={{ color: "red", fontSize: '14px', display: 'flex', justifyContent: 'right' }}>{state.validAdress}</div>
                                <div className="spacer-single" />

                                <ButtonBase
                                    style={{ backgroundColor: 'black', borderRadius: 5 }}
                                    onClick={() => onsubmit()}

                                >
                                    {state.submit}
                                </ButtonBase>
                                {
                                    state.submit === "Đang đặt hàng" &&
                                    <LinearProgress
                                        color='info'
                                        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </CustomerLayout >
    )
}

export default ProductDetailPage