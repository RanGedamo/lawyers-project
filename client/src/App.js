import './App.css';
import MuiProfileCard from './components/cards/TopLawyerCard';
import HomeLawyerCard from './components/cards/HomeLawyerCard';
import AccessibilityButton from './components/accessibilityButton/AccessibilityButton';
import Category from './components/cards/Category';

export default function App() {
  return (
    <div className="App">
      <AccessibilityButton style={{ position: "sticky", bottom: "0", }}/>
      <Category/>
      <MuiProfileCard/>
      <HomeLawyerCard/>
    </div>
  );
};