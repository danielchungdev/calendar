import DatesDisplay from "@/components/DatesDisplay/DatesDisplay";
import { Header } from "@/components/typography/Header";
import { group } from "console";

interface Activity {
  date_id: number;
  activity_id: number;
  place: string;
  day: string;
}

export default function Home() {

  const mockData: Activity[] = [
    {
      "date_id": 1,
      "activity_id": 1,
      "place": "Escape Room Panama",
      "day": "2024/11/10"
    },
    {
      "date_id": 1,
      "activity_id": 2,
      "place": "Parking en mi casa con los chicos",
      "day": "2024/11/10"
    },
    {
      "date_id": 1,
      "activity_id": 2,
      "place": "Test 2",
      "day": "2024/12/10"
    },
    {
      "date_id": 1,
      "activity_id": 2,
      "place": "test 3",
      "day": "2024/13/10"
    },
    {
      "date_id": 1,
      "activity_id": 2,
      "place": "test 3",
      "day": "2024/13/11"
    },
    {
      "date_id": 1,
      "activity_id": 2,
      "place": "test 3",
      "day": "2025/13/11"
    }
  ]

  const groupedData = mockData.reduce<Record<string, Record<string, Activity[]>>>((acc, current) => {
    const [year, date, month] = current.day.split('/');
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(current);
    return acc;
  }, {});

  const groupedArray = Object.entries(groupedData).map(([year, months]) => ({
    year,
    months: Object.entries(months).map(([month, activities]) => ({
      month,
      activities
    }))
  }));

  return (
    <div className="mt-10 mx-5">
      <Header text="Our Story" />
      <DatesDisplay datesArray={groupedArray}/>
    </div>
  )
}