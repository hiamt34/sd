import { SectionCategory } from '@/components/home/section-category'
import { SectionCollections } from '@/components/home/section-collections'
import { SectionHero } from '@/components/home/section-hero'
import { SectionIntro } from '@/components/home/section-intro'
import { SectionItems } from '@/components/home/section-items'
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
            <SectionItems props={{ type: 'hot', type_carousel: 'items-carousel-hot' }} />
            <SectionCollections />
            <SectionItems props={{ type: 'mới', type_carousel: 'items-carousel' }} />
            {/* <SectionPopular /> */}
        </ClientLayout>

    )
}
export default Home