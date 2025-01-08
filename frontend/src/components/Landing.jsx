import React from 'react';
import {
  CheckCircle,
  Brain,
  Target,
  Sparkles,
  ArrowDown,
  ListTodo,
  Tags,
  Layers,
  Clock,
  Notes,
  Filter,
} from 'lucide-react';

export default function Landing({ onGetStarted, isDark }) {
  return (
    <div
      className={`${
        isDark
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}
    >
      {/* Hero Section remains the same */}
      <div className='min-h-screen flex items-center justify-center relative'>
        {/* ... existing hero content ... */}
      </div>

      {/* Features Section - NEW */}
      <div className='py-20 px-4 bg-gradient-to-br from-teal-900/20 via-transparent to-purple-900/20'>
        <div className='max-w-6xl mx-auto'>
          <h2
            className={`text-4xl font-bold mb-12 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Powerful Features for Maximum Productivity
          </h2>

          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            {/* Task Organization */}
            <div
              className={`p-8 rounded-xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white'
              } shadow-lg transform hover:scale-105 transition-transform`}
            >
              <div className='flex items-center gap-3 mb-4'>
                <ListTodo className='text-teal-500' size={24} />
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Smart Task Management
                </h3>
              </div>
              <ul
                className={`space-y-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <li>• Prioritize tasks (Low/Medium/High)</li>
                <li>• Break down complex tasks into subtasks</li>
                <li>• Track completion status</li>
                <li>• Add detailed notes to tasks</li>
              </ul>
            </div>

            {/* Categories & Filters */}
            <div
              className={`p-8 rounded-xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white'
              } shadow-lg transform hover:scale-105 transition-transform`}
            >
              <div className='flex items-center gap-3 mb-4'>
                <Tags className='text-purple-500' size={24} />
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Organized Categories
                </h3>
              </div>
              <ul
                className={`space-y-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <li>• Separate work and personal tasks</li>
                <li>• Custom categories for better organization</li>
                <li>• Filter tasks by status or priority</li>
                <li>• Quick access to important tasks</li>
              </ul>
            </div>

            {/* Progress Tracking */}
            <div
              className={`p-8 rounded-xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white'
              } shadow-lg transform hover:scale-105 transition-transform`}
            >
              <div className='flex items-center gap-3 mb-4'>
                <Target className='text-rose-500' size={24} />
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Progress Insights
                </h3>
              </div>
              <ul
                className={`space-y-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <li>• Visual progress tracking</li>
                <li>• Completion statistics</li>
                <li>• Task completion trends</li>
                <li>• Productivity metrics</li>
              </ul>
            </div>
          </div>

          {/* Pro Tips Section - NEW */}
          <div
            className={`p-8 rounded-xl ${
              isDark ? 'bg-gray-800/30' : 'bg-white'
            } shadow-lg mb-16`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Pro Tips for Task Master
            </h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-800/50' : 'bg-gray-50'
                }`}
              >
                <h4
                  className={`text-xl font-medium mb-3 ${
                    isDark ? 'text-teal-400' : 'text-teal-600'
                  }`}
                >
                  Effective Task Creation
                </h4>
                <ul
                  className={`space-y-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <li>• Use clear, actionable task titles</li>
                  <li>• Set appropriate priority levels</li>
                  <li>• Break large tasks into manageable subtasks</li>
                  <li>• Add context with notes for future reference</li>
                </ul>
              </div>
              <div
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-800/50' : 'bg-gray-50'
                }`}
              >
                <h4
                  className={`text-xl font-medium mb-3 ${
                    isDark ? 'text-teal-400' : 'text-teal-600'
                  }`}
                >
                  Daily Workflow
                </h4>
                <ul
                  className={`space-y-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <li>• Review and prioritize tasks each morning</li>
                  <li>• Use filters to focus on current priorities</li>
                  <li>• Update task status throughout the day</li>
                  <li>• End day by planning tomorrow's tasks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Existing Productivity Insights & Strategies sections */}
          {/* ... */}

          {/* Enhanced Final CTA */}
          <div className='text-center'>
            <h2
              className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Start Mastering Your Tasks Today
            </h2>
            <p
              className={`text-xl mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Join thousands of productive professionals who use Task Master to
              achieve more
            </p>
            <button
              onClick={onGetStarted}
              className='bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl'
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
