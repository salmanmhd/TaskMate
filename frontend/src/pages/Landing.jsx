import { CheckCircle, Target, ArrowDown, ListTodo, Tags } from "lucide-react";

export default function Landing({ onGetStarted, isDark = true }) {
  const quotes = [
    {
      text: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
      author: "Stephen Covey",
    },
    {
      text: "Your future is created by what you do today, not tomorrow.",
      author: "Robert Kiyosaki",
    },
  ];

  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Hero Section - First Screen */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4">
          <div className="flex justify-center mb-8">
            <CheckCircle size={72} className="text-teal-500" />
          </div>
          <h1
            className={`text-6xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Master Your Day
          </h1>
          <p
            className={`text-2xl mb-8 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            &quot;What gets scheduled, gets done.&quot;
          </p>
          <button
            onClick={onGetStarted}
            className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Now
          </button>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown
              size={24}
              className={`${isDark ? "text-gray-400" : "text-gray-600"}`}
            />
          </div>
        </div>
      </div>

      {/* Why Task Management Section */}
      <div
        className={`max-w-4xl mx-auto mb-16 px-4 text-center ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <h2
          className={`text-4xl font-bold mb-10 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Why Task Management Matters
        </h2>
        <p className="mb-12  text-lg">
          Research shows that the simple act of writing down your tasks can
          increase your productivity by up to 42%. But Task Master goes beyond
          simple lists - it&apos;s your personal productivity companion that
          helps you:
        </p>
        <div className="grid md:grid-cols-2  gap-6 text-left">
          <div
            className={`p-6 rounded-lg ${
              isDark ? "bg-gray-800/50" : "bg-white"
            } shadow-lg`}
          >
            <h3
              className={`text-2xl font-semibold mb-2 ${
                isDark ? "text-teal-400" : "text-teal-600"
              }`}
            >
              Reduce Mental Load
            </h3>
            <p>
              Stop trying to remember everything. Let Task Master be your second
              brain, keeping track of all your tasks and deadlines.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg ${
              isDark ? "bg-gray-800/50" : "bg-white"
            } shadow-lg`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDark ? "text-teal-400" : "text-teal-600"
              }`}
            >
              Achieve More
            </h3>
            <p>
              Break down overwhelming projects into manageable steps. Watch your
              productivity soar as you tackle tasks systematically.
            </p>
          </div>
        </div>
      </div>

      {/* ------------ */}
      <div className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-12 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Powerful Features for Maximum Productivity
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Task Organization */}
            <div
              className={`p-8 rounded-xl ${
                isDark ? "bg-gray-800/50" : "bg-white"
              } shadow-lg transform hover:scale-105 transition-transform`}
            >
              <div className="flex items-center gap-3 mb-4">
                <ListTodo className="text-teal-500" size={24} />
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Smart Task Management
                </h3>
              </div>
              <ul
                className={`space-y-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li>• Prioritize tasks</li>
                <li>• Break down complex tasks into subtasks</li>
                <li>• Track completion status</li>
                <li>• Add detailed notes to tasks</li>
              </ul>
            </div>

            {/* Categories & Filters */}
            <div
              className={`p-8 rounded-xl ${
                isDark ? "bg-gray-800/50" : "bg-white"
              } shadow-lg transform hover:scale-105 transition-transform`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Tags className="text-purple-500" size={24} />
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Organized Categories
                </h3>
              </div>
              <ul
                className={`space-y-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
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
                isDark ? "bg-gray-800/50" : "bg-white"
              } shadow-lg transform hover:scale-105 transition-transform`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-rose-500" size={24} />
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Progress Insights
                </h3>
              </div>
              <ul
                className={`space-y-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
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
              isDark ? "bg-gray-800/30" : "bg-white"
            } shadow-lg mb-16`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Pro Tips for Task Master
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-800/50" : "bg-gray-50"
                }`}
              >
                <h4
                  className={`text-xl font-medium mb-3 ${
                    isDark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  Effective Task Creation
                </h4>
                <ul
                  className={`space-y-2 ${
                    isDark ? "text-gray-300" : "text-gray-600"
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
                  isDark ? "bg-gray-800/50" : "bg-gray-50"
                }`}
              >
                <h4
                  className={`text-xl font-medium mb-3 ${
                    isDark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  Daily Workflow
                </h4>
                <ul
                  className={`space-y-2 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <li>• Review and prioritize tasks each morning</li>
                  <li>• Use filters to focus on current priorities</li>
                  <li>• Update task status throughout the day</li>
                  <li>• End day by planning tomorrow&apos;s tasks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Existing Productivity Insights & Strategies sections */}
          {/* ... */}
        </div>
      </div>

      {/* Productivity Insights */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-12 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            The Science of Getting Things Done
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div
              className={`p-8 rounded-xl ${
                isDark ? "bg-gray-800/50" : "bg-white"
              } shadow-lg`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isDark ? "text-teal-400" : "text-teal-600"
                }`}
              >
                The Zeigarnik Effect
              </h3>
              <p
                className={`${
                  isDark ? "text-gray-300" : "text-gray-600"
                } text-lg`}
              >
                Our brains are wired to remember uncompleted tasks better than
                completed ones. By writing down your tasks, you free up mental
                resources and reduce anxiety.
              </p>
            </div>
            <div
              className={`p-8 rounded-xl ${
                isDark ? "bg-gray-800/50" : "bg-white"
              } shadow-lg`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isDark ? "text-teal-400" : "text-teal-600"
                }`}
              >
                Implementation Intentions
              </h3>
              <p
                className={`${
                  isDark ? "text-gray-300" : "text-gray-600"
                } text-lg`}
              >
                Research shows that people who write down when and where
                they&apos;ll complete tasks are 2-3x more likely to achieve
                their goals.
              </p>
            </div>
          </div>

          {/* Productivity Strategies */}
          <div
            className={`p-8 rounded-xl ${
              isDark ? "bg-gray-800/30" : "bg-white"
            } shadow-lg mb-16`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Proven Strategies for Success
            </h3>
            <div className="space-y-6">
              <div>
                <h4
                  className={`text-xl font-medium mb-2 ${
                    isDark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  1. The Two-Minute Rule
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  If a task takes less than two minutes, do it immediately
                  instead of writing it down. This prevents the accumulation of
                  small tasks.
                </p>
              </div>
              <div>
                <h4
                  className={`text-xl font-medium mb-2 ${
                    isDark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  2. Eat That Frog
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  Start your day with your most challenging task. This builds
                  momentum and ensures important work gets done when your energy
                  is highest.
                </p>
              </div>
              <div>
                <h4
                  className={`text-xl font-medium mb-2 ${
                    isDark ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  3. The Eisenhower Matrix
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  Prioritize tasks based on urgency and importance. Focus on
                  important but non-urgent tasks to prevent future crises.
                </p>
              </div>
            </div>
          </div>

          {/* ------------- */}

          {/* Enhanced Final CTA */}
          <div className="text-center">
            <h2
              className={`text-3xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Start Mastering Your Tasks Today
            </h2>
            <p
              className={`text-xl mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Join thousands of productive professionals who use Task Master to
              achieve more
            </p>
            <button
              onClick={onGetStarted}
              className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      {/* Inspirational Quotes */}
      <div className="max-w-4xl mx-auto grid px-4 md:grid-cols-2 gap-8">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${
              isDark ? "bg-gray-800/30" : "bg-white"
            } shadow-lg`}
          >
            <p
              className={`text-lg italic mb-2 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              &quot;{quote.text}&quot;
            </p>
            <p
              className={`text-sm ${
                isDark ? "text-teal-400" : "text-teal-600"
              }`}
            >
              - {quote.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
