import React, { useEffect } from 'react'
import styles from './DisconnectAllModal.module.scss'
import { ButtonGame } from 'Components'
import ReactDOM from 'react-dom'

export const DisconnectAllModal: React.FC<DisconnectAllModalPropsType> = ({
    callBack,
    show,
    closeCallback,
}) => {
    if (!show) {
        return null
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    const PortalNode = document.getElementById('portal')

    return PortalNode
        ? ReactDOM.createPortal(
              <div className={styles['modal-wrapper']}>
                  <div
                      className={styles['modal-overflow']}
                      onClick={closeCallback}
                  ></div>
                  <div className={styles['modal-inner']}>
                      <div className={styles['modal-content']}>
                          <div className={styles['modal-content-top']}>
                              <div className={styles['modal-content-top-icon']}>
                                  <svg
                                      width="32"
                                      height="32"
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <g id="Iconly/Light-Outline/Danger Triangle">
                                          <g id="Group 8">
                                              <g id="Group 3">
                                                  <mask
                                                      id="mask0_314_1762"
                                                      maskUnits="userSpaceOnUse"
                                                      x="2"
                                                      y="4"
                                                      width="28"
                                                      height="25"
                                                  >
                                                      <path
                                                          id="Clip 2"
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M2.66675 4H29.3517V28.2473H2.66675V4Z"
                                                          fill="white"
                                                      />
                                                  </mask>
                                                  <g mask="url(#mask0_314_1762)">
                                                      <path
                                                          id="Fill 1"
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M16.0169 6C15.3823 6 14.8169 6.328 14.4996 6.87867L4.90228 23.632C4.59028 24.1787 4.59294 24.8307 4.90894 25.376C5.22494 25.9213 5.79028 26.248 6.42094 26.248H25.5983C26.2276 26.248 26.7929 25.9213 27.1089 25.376C27.4263 24.8307 27.4289 24.1787 27.1143 23.632L17.5343 6.87867C17.2183 6.328 16.6529 6 16.0169 6ZM25.5983 28.248H6.42094C5.06894 28.248 3.85694 27.5493 3.17828 26.3787C2.49961 25.2093 2.49561 23.8107 3.16628 22.6387L12.7663 5.884C13.4409 4.704 14.6556 4 16.0169 4H16.0183C17.3783 4 18.5956 4.70533 19.2703 5.88667L28.8516 22.6387C29.5223 23.8107 29.5183 25.2093 28.8396 26.3787C28.1609 27.5493 26.9489 28.248 25.5983 28.248Z"
                                                          fill="#FF1AB1"
                                                      />
                                                  </g>
                                              </g>
                                              <path
                                                  id="Fill 4"
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M16.0054 18.8853C15.4534 18.8853 15.0054 18.4373 15.0054 17.8853V13.752C15.0054 13.2 15.4534 12.752 16.0054 12.752C16.5574 12.752 17.0054 13.2 17.0054 13.752V17.8853C17.0054 18.4373 16.5574 18.8853 16.0054 18.8853Z"
                                                  fill="#FF1AB1"
                                              />
                                              <path
                                                  id="Fill 6"
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M16.008 23.332C15.2706 23.332 14.668 22.736 14.668 21.9986C14.668 21.2613 15.2586 20.6653 15.9946 20.6653H16.008C16.7453 20.6653 17.3413 21.2613 17.3413 21.9986C17.3413 22.736 16.7453 23.332 16.008 23.332Z"
                                                  fill="#FF1AB1"
                                              />
                                          </g>
                                      </g>
                                  </svg>
                              </div>
                          </div>
                          <div className={styles['modal-content-bottom']}>
                              <div
                                  className={styles['modal-content-container']}
                              >
                                  <h3 className={styles['modal-content-title']}>
                                      Disconnect all games?
                                  </h3>
                                  <span
                                      className={
                                          styles['modal-content-sub-title']
                                      }
                                  >
                                      Disconnect
                                  </span>
                                  <div
                                      className={
                                          styles['modal-content-button-box']
                                      }
                                  >
                                      <ButtonGame
                                          callback={closeCallback}
                                          classNameBtn={
                                              styles[
                                                  'modal-content-button-cancel'
                                              ]
                                          }
                                          buttonText={'Cancel'}
                                          type={'active'}
                                      />
                                      <ButtonGame
                                          callback={callBack}
                                          buttonText={'Yes,disconnect'}
                                          type={'error'}
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>,
              PortalNode
          )
        : null
}

interface DisconnectAllModalPropsType {
    show: boolean
    closeCallback: () => void
    callBack: () => void
}
