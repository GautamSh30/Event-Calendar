import './App.css';
import {
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ScheduleComponent,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";

const App = () => {
  const eventData =  [{
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2024, 11, 5, 9, 30),
      EndTime: new Date(2024, 11, 5, 11, 0)
  }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2024, 11, 8, 12, 0),
      EndTime: new Date(2024, 11, 8, 14, 0)
  }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2024, 11, 23, 9, 30),
      EndTime: new Date(2024, 11, 23, 11, 0)
  }, {
      Id: 4,
      Subject: 'Meteor Showers in 2024',
      StartTime: new Date(2024, 11, 14, 13, 0),
      EndTime: new Date(2024, 11, 14, 14, 30)
  }];


  const eventSettings: EventSettingsModel = { dataSource: eventData };

  return (
    <div className="App">
      <ScheduleComponent
      currentView="Month"
        height="650px"
        selectedDate={new Date(2024, 11, 15)} 
        eventSettings={eventSettings} 
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

export default App;
