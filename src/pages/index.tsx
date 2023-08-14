import { SectionCategory } from '@/components/home/section-category'
import { SectionCollections } from '@/components/home/section-designer'
import { SectionHero } from '@/components/home/section-hero'
import { SectionIntro } from '@/components/home/section-intro'
import { SectionProduct } from '@/components/home/section-product'
import { SectionPopular } from '@/components/home/section-popular'
import ClientLayout from '@/layouts'
import { LoadSyncJs } from '@/ultis/load-sync-js'
import React, { useEffect, useState } from 'react'

const Home = ({ }) => {
    return (
        <ClientLayout>
            <SectionHero />
            <SectionCategory />
            {/* <SectionIntro /> */}
            <SectionProduct props={{ type: 'hot', type_carousel: 'items-carousel-hot' }} />
            <SectionCollections />
            <SectionProduct props={{ type: 'mới', type_carousel: 'items-carousel' }} />
            <SectionPopular />
        </ClientLayout>

    )
}
export default Home