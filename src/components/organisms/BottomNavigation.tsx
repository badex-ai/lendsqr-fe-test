import React from 'react'
import  ButtonSm from '../atoms/ButtonSm'
import { NextIcon } from '../../assets/icons'
import styles from './bottomNavigation.module.scss'
import SelectPage from '../atoms/selectPage'


// For dynamic number types based on customerLength, we use number since
// TypeScript can't generate literal number types dynamically at runtime
type NumberType = number

type Props = {
    currentPage: string
    pagesLength: number
    // onClickBtn: (position: PositionType) => void///
    onPageClick: (pageNumber: string) => void
    // customersLength: number
}

const BottomNavigation = ({ currentPage, pagesLength, onPageClick }: Props) => {

    
        const currentPageNum = Number(currentPage); 
       


        const pagesInit = [...Array(3)].map((_, index) => {
            const pageNumber = currentPageNum - 1 + index; // Calculate pageNumber first
            
            // Check if this would be the second-to-last page
            // if (pagesLength - 3 === pageNumber) {
            //     return null; // or return undefined
            // }
            
            // Only render if pageNumber is valid (> 0)
            return pageNumber > 0 ? (
                <button 
                    type='button'
                    key={`start-${pageNumber}`} 
                    onClick={() => {
                                onPageClick?.(pageNumber.toString());
                            }} 
                    className={
                        currentPageNum === pageNumber 
                            ? `${styles.bottomNav_nav_page} ${styles.bottomNav_nav_current}`
                            : styles.bottomNav_nav_page
                    }
                >
                    {pageNumber}
                </button>
            ) : null;
        }).filter(Boolean);


        const pagesEnd = [...Array(2)].map((_, index) => {
            const pageNumber = pagesLength - 1 + index; 
           
            return (
                <button 
                    type='button'
                    key={`end-${pageNumber}`} // Unique keys to avoid conflicts
                    onClick={() => onPageClick?.(pageNumber.toString())} 
                     className={currentPageNum !== pageNumber ? styles.bottomNav_nav_page : `${styles.bottomNav_nav_page} ${styles.bottomNav_nav_current}`}
                >
                    {pageNumber}
                </button>
            )
        });

        const pageTotal = [...Array(5)].map((_, index) => {
            const pageNumber = pagesLength - 4 + index; 
           
            return pageNumber > 0?(
                <button 
                    type='button'
                    key={`total-${pageNumber}`} // Unique keys to avoid conflicts
                    onClick={() => onPageClick?.(pageNumber.toString())} 
                    className={currentPageNum !== pageNumber ? styles.bottomNav_nav_page : `${styles.bottomNav_nav_page} ${styles.bottomNav_nav_current}`}
                >
                    {pageNumber}
                </button>
            ): null
        });



    const ellipsis = <span key={'ellipsis'}>...</span>
    const pages =Number(currentPage) >= pagesLength - 3 ? pageTotal : pagesInit.concat(ellipsis, pagesEnd);

    function handlePrevClicked() {
        if (Number(currentPage) === 1) {
             return 
        }
        const prevPage = Number(currentPage) - 1
        onPageClick(prevPage.toString())
    }

    function handleNextClicked() {
         if (Number(currentPage) === pagesLength) {
             return 
        }
        const nextPage = Number(currentPage) + 1
        onPageClick(nextPage.toString())
    }

    return (
        <div className={styles.bottomNav}>
            <div className={styles.bottomNav_nav_pageInfo}>Showing  <span><SelectPage pageLength={pagesLength} handlePageSelected={onPageClick}/></span>
             <span>out of {pagesLength}</span>
             </div> 
            <div className={styles.bottomNav_nav}>
                <ButtonSm 
                    onClick={handlePrevClicked} 
                    icon={<NextIcon position='left'/>}
                />
                <div className={styles.bottomNav_nav_pages}>
                    {pages}
                </div> 
                <ButtonSm 
                    onClick={handleNextClicked} 
                    icon={<NextIcon position='right'/>}
                />
            </div>
        </div>
    )
}

export default BottomNavigation