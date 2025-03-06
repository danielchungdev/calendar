import { Header } from "../typography/Header";
import { SubHeader } from "../typography/SubHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface Activity {
  date_id: number;
  activity_id: number;
  place: string;
  day: string;
}

type MonthActivities = {
  month: string;
  activities: Activity[];
};

type YearActivities = {
  year: string;
  months: MonthActivities[];
};

type DatesDisplayProps = {
  datesArray: YearActivities[];
};

const DatesDisplay = ({ datesArray }: DatesDisplayProps) => {
  return (
    <div>
      {datesArray.map(({ year, months }) => (
        <div key={year}>
          <Header text={`${year}`} muted={true}/>
          {months.map(({ month, activities }) => (
            <div key={month} className="mx-5">
              <SubHeader text={`${month}`} />

              {/* <ul>
                  {activities.map((activity) => (
                    <li key={activity.activity_id}>
                      {activity.place} - {activity.day.split('/')[1]}
                    </li>
                  ))}
                </ul> */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent className="AccordionContent">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DatesDisplay;