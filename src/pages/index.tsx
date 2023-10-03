import { SectionCategory } from '@/components/home/section-category'
import { SectionDesigner } from '@/components/home/section-designer'
import { SectionHero } from '@/components/home/section-hero'
import { SectionIntro } from '@/components/home/section-intro'
import { SectionProduct } from '@/components/home/section-product'
import { SectionPopular } from '@/components/home/section-popular'
import CustomerLayout from '@/layouts/customer_layouts'
import { LoadSyncJs } from '@/ultis/load-sync-js'
import React, { useEffect, useState } from 'react'
import { ApiService } from '@/services/api/http'
import { Product } from '@/services/api/inteface/product.inteface'

const Home = ({ }) => {


    return (
        <CustomerLayout>
            <SectionHero />
            <SectionCategory />
            <SectionProduct name='Bộ sưu tập hot' type_carousel='items-carousel-hot' />
            <SectionDesigner />
            <SectionProduct name='Bộ sưu tập mới' type_carousel='items-carousel' />
            <SectionPopular />
        </CustomerLayout>

    )
}
export default Home