import React from 'react'
import { HomeFooter } from './componentsHome/HomeFooter'
import { HomeSections } from './componentsHome/HomeSections'

export const HomeContainer = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className="mt-5">
                <HomeSections/>
                <HomeFooter/>
            </div>
        </div>
    )
}
