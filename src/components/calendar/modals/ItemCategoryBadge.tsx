
import React from 'react';
import { EventCategory } from '@/types/calendar';
import { getEventCategoryColor } from '@/utils/category-utils';

interface ItemCategoryBadgeProps {
  category: EventCategory;
  itemType?: string;
}

const ItemCategoryBadge: React.FC<ItemCategoryBadgeProps> = ({ category, itemType }) => {
  return (
    <div className="mt-2">
      <span className={`text-xs px-2 py-0.5 rounded-full ${getEventCategoryColor(category)}`}>
        {category}
      </span>
      {itemType && (
        <span className="text-xs bg-secondary/80 rounded px-1 py-0.5 ml-2">
          {itemType === 'class_plan' ? 'Class Plan' : itemType}
        </span>
      )}
    </div>
  );
};

export default ItemCategoryBadge;
