import { ItemItems } from "@/components/commons/item-items";
import ClientLayout from "@/layouts";

const CreatePage = () => {
  return (
    <ClientLayout>
      <section aria-label="section">
        <div className="container">
          <div className="row wow fadeIn">
            <div className="col-lg-7 offset-lg-1">
              <form
                id="form-create-item"
                className="form-border"
              >
                <div className="field-set">
                  <div className="row">
                    <div className="col-lg-6 ">
                      <h5>Upload ảnh hiển thị sản phẩm</h5>
                      <div className="d-create-file">
                        <p id="file_name">PNG, JPG, GIF, WEBP. Max 100mb.</p>
                        <input
                          type="button"
                          id="get_file"
                          className="btn-main"
                          defaultValue="Chọn hình ảnh"
                        />
                        <input type="file" id="upload_file" />
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <h5>Upload file hình ảnh in lên áo</h5>
                      <div className="d-create-file">
                        <p id="file_name">PNG, JPG, GIF, WEBP. Max 500mb.</p>
                        <input
                          type="button"
                          id="get_file"
                          className="btn-main"
                          defaultValue="Chọn hình ảnh"
                        />
                        <input type="file" id="upload_file" />
                      </div>
                    </div>
                  </div>
                  <div className="spacer-20" />
                  <h5>Upload hình ảnh mẫu sản phẩm (có thể chọn nhiều)</h5>
                  <div className="d-create-file">
                    <p id="file_name">PNG, JPG, GIF, WEBP. Max 100mb. (Bạn đã chọn x Mẫu)</p>
                    <input
                      type="button"
                      id="get_file"
                      className="btn-main"
                      defaultValue="Chọn hình ảnh"
                    />
                    <input type="file" id="upload_file" />
                  </div>

                  <div className="spacer-20" />
                  <h5>Chọn danh mục sản phẩm</h5>
                  <p className="p-info">
                    This is the collection where your item will appear.
                  </p>
                  <div id="item_collection" className="dropdown fullwidth mb20">
                    <a href="#" className="btn-selector">
                      Select Collection
                    </a>
                    <ul>
                      <li>
                        <span>Abstraction</span>
                      </li>
                      <li>
                        <span>Patternlicious</span>
                      </li>
                      <li>
                        <span>Skecthify</span>
                      </li>
                      <li>
                        <span>Cartoonism</span>
                      </li>
                      <li>
                        <span>Virtuland</span>
                      </li>
                      <li>
                        <span>Papercut</span>
                      </li>
                    </ul>
                  </div>
                  <div className="spacer-20" />
                  <h5>Tiêu đề sản phẩm</h5>
                  <input
                    type="text"
                    name="item_title"
                    id="item_title"
                    className="form-control"
                    placeholder="Áo hoa 2023"
                  />
                  <div className="spacer-20" />
                  <h5>Mô tả (không bắt buộc)</h5>
                  <textarea
                    data-autoresize=""
                    name="item_desc"
                    id="item_desc"
                    className="form-control"
                    placeholder="sản phẩm đang hot trend 2023"
                    defaultValue={""}
                  />
                  <div className="spacer-single" />
                  <input
                    type="button"
                    id="submit"
                    className="btn-main"
                    defaultValue="Create Item"
                  />
                  <div className="spacer-single" />
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <h5>Xem trước sản phẩm</h5>
              <ItemItems />
            </div>
          </div>
        </div>
      </section>

    </ClientLayout>
  )
};
export default CreatePage;
