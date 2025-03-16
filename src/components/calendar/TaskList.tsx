
import React, { useState } from 'react';
import { useCalendar } from '@/context/CalendarContext';
import { CheckCircle, Circle, Plus } from 'lucide-react';
import { getEventCategoryColor } from '@/utils/mock-data';
import { CalendarTask } from '@/types/calendar';

const TaskList: React.FC = () => {
  const { tasks } = useCalendar();
  const [filter, setFilter] = useState<'all' | 'me'>('me');

  const handleTaskToggle = (taskId: string) => {
    // In a real app, this would update the task in the database
    console.log('Toggle task:', taskId);
  };

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
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            onToggle={() => handleTaskToggle(task.id)}
          />
        ))}
      </div>
      
      <button className="flex items-center mt-4 text-muted-foreground hover:text-foreground transition-colors">
        <Plus className="w-4 h-4 mr-2" />
        <span>Add to-do</span>
      </button>
    </div>
  );
};

interface TaskItemProps {
  task: CalendarTask;
  index: number;
  onToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onToggle }) => {
  return (
    <div
      className={`flex items-start p-2 rounded-md hover:bg-secondary/30 transition-all duration-200 animate-slide-up`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <button onClick={onToggle} className="mr-3 mt-0.5 flex-shrink-0">
        {task.completed ? (
          <CheckCircle className="w-5 h-5 text-primary" />
        ) : (
          <Circle className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      <div className="flex-1">
        <p className={`${task.completed ? 'line-through text-muted-foreground' : ''}`}>
          {task.title}
        </p>
        <div className="flex items-center mt-1">
          <span className={`text-xs px-2 py-0.5 rounded-full ${getEventCategoryColor(task.category)}`}>
            {task.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
