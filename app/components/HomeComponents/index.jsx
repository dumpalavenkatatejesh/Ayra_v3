import React from 'react'
import HomeBanner from './HomeBanner'
import AboutAyra from './AboutAyra'
import SectionOpenCanvasDistinct from './SectionOpenCanvasDistinct'
import ExploreAyra from './ExploreAyra'
import FocusCenters from './FocusCenters'
import AdmissionNowOpen from './AdmissionNowOpen'
import BreathExploreLearn from './BreathExploreLearn'
import CampusLife from './CampusLife'
import NewsAndEvents from './NewsAndEvents'
import CardSection from './CardSection'

const index = () => {
    return (
        <div>
            <HomeBanner />
            <AboutAyra />
            <CardSection />
            {/* <SectionOpenCanvasDistinct /> */}
            <ExploreAyra />
            <FocusCenters />
            {/* <AdmissionNowOpen /> */}
            <BreathExploreLearn />
            <CampusLife />
            <NewsAndEvents />
        </div>
    )
}

export default index
