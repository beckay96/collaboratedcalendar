
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface NavigationButtonsProps {
  itemType?: string;
  originalId?: string;
  onClose: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ 
  itemType, 
  originalId,
  onClose 
}) => {
  const navigate = useNavigate();

  const navigateToAssistant = async () => {
    if (itemType === 'lesson' && originalId) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const authToken = session?.access_token || '';
        const userId = session?.user?.id || '';
        
        console.log('Navigating to Assignment Assistant for lesson:', originalId);
        
        // Navigate with auth data in URL params
        navigate(`/assignment-assistant/${originalId}?auth_token=${authToken}&user_id=${userId}`);
        onClose();
      } catch (error) {
        console.error('Error getting auth data:', error);
        // Fallback to basic navigation if auth fails
        navigate(`/assignment-assistant/${originalId}`);
        onClose();
      }
    }
  };

  const navigateToClassCompass = async () => {
    if (itemType === 'class_plan' && originalId) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const authToken = session?.access_token || '';
        const userId = session?.user?.id || '';
        
        console.log('Navigating to Class Compass for class plan:', originalId);
        
        // Navigate with auth data in URL params
        navigate(`/class-compass/${originalId}?auth_token=${authToken}&user_id=${userId}`);
        onClose();
      } catch (error) {
        console.error('Error getting auth data:', error);
        // Fallback to basic navigation if auth fails
        navigate(`/class-compass/${originalId}`);
        onClose();
      }
    }
  };

  if (!itemType || (!['lesson', 'class_plan'].includes(itemType))) {
    return null;
  }

  return (
    <div className="mt-4">
      {itemType === 'lesson' && (
        <Button onClick={navigateToAssistant} variant="outline">
          <ExternalLink className="w-4 h-4 mr-2" />
          Go to Assignment Assistant
        </Button>
      )}
      
      {itemType === 'class_plan' && (
        <Button onClick={navigateToClassCompass} variant="outline">
          <ExternalLink className="w-4 h-4 mr-2" />
          Go to Class Compass
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
