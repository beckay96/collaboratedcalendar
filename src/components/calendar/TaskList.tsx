
import React, { useState } from 'react';
import { useCalendar } from '@/context/CalendarContext';
import { CheckCircle, Circle, Loader2, Plus } from 'lucide-react';
import { CalendarTask, TaskStatus } from '@/types/calendar';
import ItemDetailModal from './ItemDetailModal';

const TaskList: React.FC = () => {
  const { tasks, loading, updateTaskStatus, getEventCategoryColor } = useCalendar();
  const [filter, setFilter] = useState<'all' | 'me'>('me');
  const [selectedTask, setSelectedTask] = useState<CalendarTask | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTaskToggle = (taskId: string, currentStatus: TaskStatus) => {
    const newStatus: TaskStatus = currentStatus === 'Complete' ? 'To Do' : 'Complete';
    updateTaskStatus(taskId, newStatus);
  };

  const handleTaskClick = (task: CalendarTask) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  if (loading) {
    return (
      <div className="mt-4 p-3 bg-card/50 rounded-xl border border-border/50 h-48 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading tasks...</span>
      </div>
    );
  }

  // Ensure we're filtering empty tasks
  const filteredTasks = tasks || [];

  return (
    <div className="mt-4 p-3 bg-card/50 rounded-xl border border-border/50 animate-scale-in">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold neon-text-blue">To-dos</h3>
        <div className="ml-4 flex items-center space-x-2">
          <button
            className={`px-4 py-1 rounded-full text-sm transition-all ${
              filter === 'me'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary/50 text-muted-foreground'
            }`}
            onClick={() => setFilter('me')}
          >
            me
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm transition-all ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary/50 text-muted-foreground'
            }`}
            onClick={() => setFilter('all')}
          >
            all
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <div className="text-muted-foreground text-center py-4">
            No tasks found
          </div>
        ) : (
          filteredTasks.map((task, index) => (
            <TaskItem
              key={task.id || `generated-task-${index}`}
              task={task}
              index={index}
              onToggle={() => handleTaskToggle(task.id, task.status || 'To Do')}
              onClick={() => handleTaskClick(task)}
              getEventCategoryColor={getEventCategoryColor}
            />
          ))
        )}
      </div>
      
      <button className="flex items-center mt-4 text-muted-foreground hover:text-foreground transition-colors">
        <Plus className="w-4 h-4 mr-2" />
        <span>Add to-do</span>
      </button>

      <ItemDetailModal 
        item={selectedTask} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

interface TaskItemProps {
  task: CalendarTask;
  index: number;
  onToggle: () => void;
  onClick: () => void;
  getEventCategoryColor: (category: string) => string;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onToggle, onClick, getEventCategoryColor }) => {
  const isCompleted = task.status === 'Complete' || task.completed;
  
  return (
    <div
      className={`flex items-start p-2 rounded-md hover:bg-secondary/30 transition-all duration-200 animate-slide-up cursor-pointer`}
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={onClick}
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }} 
        className="mr-3 mt-0.5 flex-shrink-0"
      >
        {isCompleted ? (
          <CheckCircle className="w-5 h-5 text-primary" />
        ) : (
          <Circle className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      <div className="flex-1">
        <p className={`${isCompleted ? 'line-through text-muted-foreground' : ''} flex items-center`}>
          {task.emoji && <span className="mr-2">{task.emoji}</span>}
          <span>{task.title}</span>
        </p>
        <div className="flex items-center mt-1 space-x-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${getEventCategoryColor(task.category)}`}>
            {task.category}
          </span>
          {task.status && (
            <span className={`text-xs rounded px-1 py-0.5 ${getStatusColorClass(task.status)}`}>
              {task.status}
            </span>
          )}
          {task.itemType && (
            <span className="text-xs bg-secondary/80 rounded px-1 py-0.5">
              {task.itemType === 'class_plan' ? 'Class Plan' : task.itemType}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to get the appropriate color class for each status
const getStatusColorClass = (status: TaskStatus): string => {
  switch (status) {
    case 'Complete':
      return 'bg-green-500/80 text-white';
    case 'In Progress':
      return 'bg-blue-500/80 text-white';
    case 'Overdue':
      return 'bg-red-500/80 text-white';
    case 'To Do':
    default:
      return 'bg-gray-500/80 text-white';
  }
};

export default TaskList;
