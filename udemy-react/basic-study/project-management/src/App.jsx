import { useState } from 'react';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });
  
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
