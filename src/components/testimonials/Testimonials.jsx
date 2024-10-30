import React from 'react'
import { Section } from './styles.Testimonials'
import avatar1 from '../assets/avatar1.jpeg';
import {imageZoomEffect, TitleStyles} from '../ReusableStyles'


const Testimonials = () => {
  return (
    <Section id='testimonials'>
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span>Customer says
            </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.<span>Dignissimos nisi nesciunt totam?</span>
                </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.<span>Dignissimos nisi nesciunt totam?</span>
                </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.<span>Dignissimos nisi nesciunt totam?</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
