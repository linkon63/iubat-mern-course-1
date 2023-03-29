import React from 'react'
import FooterEco from '../Shared/FooterEco'
import NavbarEco from '../Shared/NavbarEco'
import FeaturesSection from './FeaturesSection'
import ProductEco from './ProductEco'
export default function HomeEco() {
    return (
        <div>
            <NavbarEco />
            <div className="border border-8 border-emerald-400 w-full">
                <div className='border border-3 border-gray flex justify-center'>
                    <ProductEco />
                </div>
                <FeaturesSection />
            </div>
            <FooterEco />
        </div>
    )
}
