import { Header } from "../typography/Header";
import { SubHeader } from "../typography/SubHeader";
import { TypographyH4 } from "../typography/TypographyH4";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { monthNumberToString } from "@/functions/monthNumberToString";
import {stringDateToFormalDate} from "@/functions/stringDateToFormalDate";

interface Activity {
  date_id: number;
  activity_id: number;
  description: string;
  day: string;
}

type DateGroupedActivities = Activity[][];

type MonthActivities = {
  month: string;
  dates: DateGroupedActivities;
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
    <div className="mb-20">
      {datesArray.map(({ year, months }) => (
        <div key={year}>
          <Header text={`${year}`} muted={true} className="sticky-year"/>
          {months.map(({ month, dates }) => (
            <div key={month} className="mx-2">
              <SubHeader text={`${monthNumberToString(parseInt(month))}`} className="sticky-month"/>
              <Accordion type="single" collapsible className="mx-2">
                {dates.map((activity, index) => (
                  <AccordionItem value={`item-${index}`} key={`date-${index}`}>
                    <AccordionTrigger>
                      <div className="flex justify-between">
                        <TypographyH4 text={stringDateToFormalDate(activity[0].day)} />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {activity.map((item, index) => (
                        <div key={`activity-${index}`}>
                          <p>{item.description}</p>
                        </div>
                      ))} 
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DatesDisplay;