import React, { useState } from 'react';

const CardAccordion: React.FC<{ children: Array<JSX.Element>, width?: string }> = ({ children, width }) => {
    const [expandedItem, setExpandedItem] = useState(0);
    const widthClass = width ? `w-${width}` : '';
    const renderAccordionItems = () => {
        return children.map((child: JSX.Element, index: number) => {
            const heightClass = index === expandedItem ? 'max-h-[3000px] h-full overflow-visible' : 'max-h-[70px] overflow-hidden';
            return <div key={index} className={`
                accordion-item
                w-full 
                cursor-pointer 
                accordion-card-transition
                ${heightClass}`
            } onClick={() => {
                // TODO - might want to add stop event propagation in child components as well
                // for expediency, this return should work 
                if (index === expandedItem) return;
                // for animation - want to "close" previous accordion item and then expand the newly selected one
                setExpandedItem(null);
                setTimeout(() => setExpandedItem(index), 500)
            }}>
                {child}
            </div>

        })
    }
    return (
        <div className={`accordion relative flex flew-col flex-wrap bg-site-neutral-300 ${widthClass} gap-4`}>
            {renderAccordionItems()}
        </div>
    );
}

export default CardAccordion;
