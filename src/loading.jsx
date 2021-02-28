import React from 'react'
import './loading.css'

export default function Loading() {
    console.log('loading....')
  
    return (
        <>
            <div className="LoaderBalls">
                <div className="LoaderBalls__item"></div>
                <div className="LoaderBalls__item"></div>
                <div className="LoaderBalls__item"></div>
            </div>
        </>
    )
}
