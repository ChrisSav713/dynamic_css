import React from 'react'
import './Controls.css'
import SmallText from './SmallText'

function Controls() {
  // /* display:flex;
  // display:inline-flex;

  // /* flex box container */
  // flex-direction: row;
  // flex-direction: row-reverse;
  // flex-direction: column;
  // flex-direction: column-reverse;

  // flex-direction: inherit;
  // flex-direction: initial;
  // flex-direction: unset;

  // flex-wrap: nowrap;
  // flex-wrap: wrap;
  // flex-wrap: wrap-reverse;

  // flex-wrap: inherit;
  // flex-wrap: initial;
  // flex-wrap: unset;

  // /* shorthand defines flex-direction and flex-wrap */
  // flex-flow: column wrap;

  // flex-direction:column;
  // flex-direction:column-reverse;
  // flex-direction:row;
  // flex-direction:row-reverse;

  // flex-direction: inherit;
  // flex-direction: initial;
  // flex-direction: unset;

  // /* Main Align */
  // justify-content:flex-start;
  // justify-content:flex-end;
  // justify-content:center;
  // justify-content:space-between;
  // justify-content:space-around;
  // /* not in flex box */
  // justify-content:space-evenly;

  // justify-content:inherit;
  // justify-content:initial;
  // justify-content:unset;

  // /* Cross Align */
  // align-items:baseline;
  // align-items:center;
  // align-items:flex-end;
  // align-items:flex-start;
  // align-items:stretch;

  // align-items:inherit;
  // align-items:initial;
  // align-items:unset;

  // /* Multi Align */
  // align-content: flex-start;
  // align-content: flex-end;
  // align-content: center;
  // align-content: space-between;
  // align-content: space-around;
  // align-content: stretch;
  // /* not in flex box, flex grid */
  // align-content: space-evenly;

  // align-content:inherit;
  // align-content:initial;
  // align-content:unset;

  return (
    <div className='controlContainer'>
      Controls
      <div className='topPanel'>TP</div>
      <div className='bottomTwoColumns'>
        BP
        <div className='leftColumn'>
          LC
          <div className='containerProperties'>
            Con
            <div className='property'>
              <label className='smallTextLabel'>display</label>

              <div className='propertyValues'>
                <button className='propertyItems'>flex</button>
                <button className='propertyItems'>inline-flex</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>flex-direction</label>
              <div className='propertyValues'>
                <button className='propertyItems'>row</button>
                <button className='propertyItems'>row-reverse</button>
                <button className='propertyItems'>column</button>
                <button className='propertyItems'>column-reverse</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>flex-wrap</label>
              <div className='propertyValues'>
                <button className='propertyItems'>nowrap</button>
                <button className='propertyItems'>wrap</button>
                <button className='propertyItems'>wrap-reverse</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>flex-direction</label>
              <div className='propertyValues'>
                <button className='propertyItems'>column</button>
                <button className='propertyItems'>column-reverse</button>
                <button className='propertyItems'>row</button>
                <button className='propertyItems'>row-reverse</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>justify-content</label>
              <div className='propertyValues'>
                <button className='propertyItems'>flex-start</button>
                <button className='propertyItems'>flex-end</button>
                <button className='propertyItems'>center</button>
                <button className='propertyItems'>space-between</button>
                <button className='propertyItems'>space-around</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>align-items</label>
              <div className='propertyValues'>
                <button className='propertyItems'>baseline</button>
                <button className='propertyItems'>center</button>
                <button className='propertyItems'>flex-end</button>
                <button className='propertyItems'>flex-start</button>
                <button className='propertyItems'>stretch</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>align-content</label>
              <div className='propertyValues'>
                <button className='propertyItems'>flex-start</button>
                <button className='propertyItems'>flex-end</button>
                <button className='propertyItems'>center</button>
                <button className='propertyItems'>space-between</button>
                <button className='propertyItems'>space-around</button>
                <button className='propertyItems'>stretch</button>
              </div>
            </div>
          </div>
        </div>
        <div className='rightColumn'>
          RC
          <div className='itemProperties'>
            item
            <div className='property'>
              <label className='smallTextLabel'>align-self</label>
              <div className='propertyValues'>
                <button className='propertyItems'>auto</button>
                <button className='propertyItems'>flex-start</button>
                <button className='propertyItems'>flex-end</button>
                <button className='propertyItems'>center</button>
                <button className='propertyItems'>baseline</button>
                <button className='propertyItems'>stretch</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>flex-grow</label>
              <div className='propertyValues'>
                <SmallText
                  className='textStyle'
                  props={{ label: 'flex-grow', text: '' }}
                />
                <button className='propertyItems'>flex-start</button>
                <button className='propertyItems'>flex-end</button>
                <button className='propertyItems'>center</button>
                <button className='propertyItems'>space-between</button>
                <button className='propertyItems'>space-around</button>
                <button className='propertyItems'>stretch</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>flex-shrink</label>
              <div className='propertyValues'>
                <SmallText
                  className='textStyle'
                  props={{ label: 'flex-shrink', text: '' }}
                />
                <button className='propertyItems'>flex-start</button>
                <button className='propertyItems'>flex-end</button>
                <button className='propertyItems'>center</button>
                <button className='propertyItems'>space-between</button>
                <button className='propertyItems'>space-around</button>
                <button className='propertyItems'>stretch</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>flex-basis</label>
              <div className='propertyValues'>
                <SmallText
                  className='textStyle'
                  props={{ label: 'flex-basis', text: '' }}
                />
                <button className='propertyItems'>auto</button>
                <button className='propertyItems'>px</button>
                <button className='propertyItems'>em</button>
                <button className='propertyItems'>%</button>
                <button className='propertyItems'>vh</button>
                <button className='propertyItems'>vw</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>order</label>
              <div className='propertyValues'>
                <SmallText
                  className='textStyle'
                  props={{ label: 'order', text: '' }}
                />
                <button className='propertyItems'>auto</button>
                <button className='propertyItems'>px</button>
                <button className='propertyItems'>em</button>
                <button className='propertyItems'>%</button>
                <button className='propertyItems'>vh</button>
                <button className='propertyItems'>vw</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>width</label>
              <div className='propertyValues'>
                <SmallText
                  className='textStyle'
                  props={{ label: 'width', text: '' }}
                />
                <button className='propertyItems'>auto</button>
                <button className='propertyItems'>px</button>
                <button className='propertyItems'>em</button>
                <button className='propertyItems'>%</button>
                <button className='propertyItems'>vh</button>
                <button className='propertyItems'>vw</button>
              </div>
            </div>
            <div className='property'>
              <label className='smallTextLabel'>height</label>
              <div className='propertyValues'>
                <SmallText
                  className='textStyle'
                  props={{ label: 'height', text: '' }}
                />
                <button className='propertyItems'>auto</button>
                <button className='propertyItems'>px</button>
                <button className='propertyItems'>em</button>
                <button className='propertyItems'>%</button>
                <button className='propertyItems'>vh</button>
                <button className='propertyItems'>vw</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Controls
