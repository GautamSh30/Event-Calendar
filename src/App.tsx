import './App.css';
import {
  Inject,
  Day,
  Week,
  Month,
  Agenda,
  ScheduleComponent,
  EventSettingsModel,
  DragAndDrop,
  Resize,
  DragEventArgs,
  ResizeEventArgs,
  NavigateOptions,
  ViewDirective,
  ViewsDirective
} from "@syncfusion/ej2-react-schedule";

const onDragStart = (args: DragEventArgs) => {
  args.interval = 1;
  (args.navigation as NavigateOptions).enable = true;
};

const onResizeStart = (args: ResizeEventArgs) => {
  args.interval = 1;
};

const eventTemplate = (props: { Subject?: string; StartTime?: Date; EndTime?: Date; Color?: string }): JSX.Element => {
  return <div className="template-wrap">{props.Subject}</div>;
};

const eventTemplateMonth = (props: { Subject?: string }): JSX.Element => {
  return <div className="template-wrap1">{props.Subject}</div>;
};

const App = () => {4
  const eventData =  [{
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2024, 11, 5, 9, 30),
      EndTime: new Date(2024, 11, 5, 9, 0)
  }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2024, 11, 8, 12, 0),
      EndTime: new Date(2024, 11, 8, 12, 30)
  }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2024, 11, 23, 9, 30),
      EndTime: new Date(2024, 11, 23, 10, 0)
  }, {
      Id: 4,
      Subject: 'Meteor Showers in 2024',
      StartTime: new Date(2024, 11, 12, 7, 0),
      EndTime: new Date(2024, 11, 12, 7, 30),
      IsBlock: true
  }, {
      Id: 5,
      Subject: 'Meteor Showers in 2024',
      StartTime: new Date(2024, 11, 16, 8, 0),
      EndTime: new Date(2024, 11, 16, 8, 30),
    }, {
      Id: 6,
      Subject: 'Meteor Showers in 2024',
      StartTime: new Date(2024, 11, 21, 7, 0),
      EndTime: new Date(2024, 11, 21, 7, 30),
    }, {
      Id: 7,
      Subject: 'Meteor Showers in 2024',
      StartTime: new Date(2024, 11, 19, 13, 0),
      EndTime: new Date(2024, 11, 19, 13, 30),
    }];

  const eventSettings: EventSettingsModel = { 
    dataSource: eventData,
  };

  return (
    <div className="App">
      <ScheduleComponent
        currentView="Month"
        height="650px"
        selectedDate={new Date(2024, 11, 16)} 
        eventSettings={eventSettings}
        dragStart={onDragStart}
        resizeStart={onResizeStart}
      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" eventTemplate={eventTemplate}  />
          <ViewDirective option="Month" eventTemplate={eventTemplateMonth} />
          <ViewDirective option="Agenda" />
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  );
};

export default App;
