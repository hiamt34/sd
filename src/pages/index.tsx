import { SectionCategory } from '@/components/home/section-category'
import { SectionCollections } from '@/components/home/section-designer'
import { SectionHero } from '@/components/home/section-hero'
import { SectionIntro } from '@/components/home/section-intro'
import { SectionProduct } from '@/components/home/section-product'
import { SectionPopular } from '@/components/home/section-popular'
import CustomerLayout from '@/layouts/customer_layouts'
import { LoadSyncJs } from '@/ultis/load-sync-js'
import React, { useEffect, useState } from 'react'

const Home = ({ }) => {
    return (
        <CustomerLayout>
            <SectionHero />
            <SectionCategory />
            <SectionProduct props={{ type: 'Mẫu thiết kế hot', type_carousel: 'items-carousel-hot' }} />
            <SectionCollections />
            <SectionProduct props={{ type: 'MẫU thiết kế mới', type_carousel: 'items-carousel' }} />
            <SectionPopular />
        </CustomerLayout>

    )
}
export default Home