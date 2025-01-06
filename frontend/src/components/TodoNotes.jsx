import { MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function TodoNotes({ notes, onUpdateNotes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newNotes, setNewNotes] = useState(notes);

  function handleOnBlur() {
    setIsEditing(false);
    onUpdateNotes(newNotes);
  }

  return (
    <div className='pl-12 mt-2'>
      {isEditing ? (
        <textarea
          value={newNotes}
          onChange={(e) => setNewNotes(e.target.value)}
          onBlur={handleOnBlur}
          className='w-full bg-gray-700/50 rounded-lg p-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500'
          rows={3}
          autoFocus
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className='flex items-start gap-2 text-sm text-gray-400 cursor-text'
        >
          <MessageSquare size={14} className='mt-1' />
          {notes || 'Add notes...'}
        </div>
      )}
    </div>
  );
}
