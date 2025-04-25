import EditorLayout from './components/Editor/EditorLayout';
import ResumePreview from './components/Preview/ResumePreview';

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100">
      <div className="bg-white rounded p-4 shadow">
        <EditorLayout />
      </div>
      <ResumePreview />
    </div>
  );
}
