import { Typography } from '@material-ui/core'
import React from 'react'
import { BasicPricingList, BusinessPricingList, EnterprisePricingList } from './list-items'
import "./styles.scss"

export const PricingSection = () => {

    return (
        <div className="pricing-layout">
            <div className="pricing-wrapper">
                <div className="pricing-table">
                    <div className="variant">
                        <span className="pricing-plan-label">Basic</span>
                        <span className="price-label">20&euro; / month (+tax)</span>
                        <BasicPricingList/>

                    </div>
                    <div className="separator" />
                    <div className="variant">
                        <span className="pricing-plan-label">Business</span>
                        <span className="price-label">Coming soon</span>
                        <BusinessPricingList/>
                    </div>
                    <div className="separator" />
                    <div className="variant">
                        <span className="pricing-plan-label">Corporate</span>
                        <span className="price-label">Coming soon</span>
                        <EnterprisePricingList/>
                    </div>
                </div>
            </div>
        </div>
    )
}