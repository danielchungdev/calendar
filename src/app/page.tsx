import DatesDisplay from "@/components/DatesDisplay/DatesDisplay";
import { Header } from "@/components/typography/Header";

interface Activity {
  date_id: number;
  activity_id: number;
  description: string;
  day: string;
}

export default async function Home() {

  const mockData: Activity[] = [
    {
      "date_id": 1,
      "activity_id": 1,
      "description": "Carpool desde Chorrera",
      "day": "2024/11/10"
    },
    {
      "date_id": 1,
      "activity_id": 2,
      "description": "Escape Room con la people",
      "day": "2024/11/10"
    },
    {
      "date_id": 1,
      "activity_id": 3,
      "description": "Parking en mi casa con la people",
      "day": "2024/11/10"
    },
    {
      "date_id": 2,
      "activity_id": 3,
      "description": "Fiesta de Navidad + cumple de Kelly",
      "day": "2024/12/21"
    },
    {
      "date_id": 3,
      "activity_id": 4,
      "description": "Squid game binge (First official date!)",
      "day": "2025/1/3"
    },
    {
      "date_id": 4,
      "activity_id": 5,
      "description": "Salida a Chiriquilandia",
      "day": "2025/1/9"
    },
    {
      "date_id": 5,
      "activity_id": 5,
      "description": "Viaje a Chiriquilandia",
      "day": "2025/1/10"
    },
    {
      "date_id": 6,
      "activity_id": 5,
      "description": "Viaje a Chiriquilandia",
      "day": "2025/1/11"
    },
    {
      "date_id": 7,
      "activity_id": 5,
      "description": "Regreso de Chiriquilandia",
      "day": "2025/1/12"
    },
    {
      "date_id": 7,
      "activity_id": 6,
      "description": "Cena en Xiao Ya",
      "day": "2025/1/12"
    },
    {
      "date_id": 8,
      "activity_id": 7,
      "description": "Interstellar date, Altaplaza",
      "day": "2025/1/15"
    },
    {
      "date_id": 9,
      "activity_id": 8,
      "description": "Cafe Date",
      "day": "2025/1/23"
    },
    {
      "date_id": 9,
      "activity_id": 9,
      "description": "Sancha Panza birthday dinner",
      "day": "2025/1/23"
    },
    {
      "date_id": 9,
      "activity_id": 10,
      "description": "Board games con Chonsi y Shirley",
      "day": "2025/1/23"
    },
    {
      "date_id": 10,
      "activity_id": 11,
      "description": "Minigolf date",
      "day": "2025/1/29"
    },
    {
      "date_id": 10,
      "activity_id": 12,
      "description": "Random action movie (Held hands)",
      "day": "2025/1/29"
    },
    {
      "date_id": 11,
      "activity_id": 12,
      "description": "Scary movie con Chonsi y Shirley",
      "day": "2025/1/31"
    },
    {
      "date_id": 11,
      "activity_id": 13,
      "description": "Board games",
      "day": "2025/1/31"
    },
    {
      "date_id": 12,
      "activity_id": 14,
      "description": "Meokja date",
      "day": "2025/2/6"
    },
    {
      "date_id": 12,
      "activity_id": 15,
      "description": "We're not really strangers",
      "day": "2025/2/6"
    },
    {
      "date_id": 13,
      "activity_id": 16,
      "description": "Chico's Wedding",
      "day": "2025/2/7"
    },
    {
      "date_id": 13,
      "activity_id": 17,
      "description": "Finished Squid Game",
      "day": "2025/2/7"
    },
    {
      "date_id": 13,
      "activity_id": 18,
      "description": "Colombia Korean movie (First kiss!)",
      "day": "2025/2/7"
    },
    {
      "date_id": 14,
      "activity_id": 19,
      "description": "Conclave movie date",
      "day": "2025/2/11"
    },
    {
      "date_id": 15,
      "activity_id": 20,
      "description": "Valentines Day Dinner Calle Dragones",
      "day": "2025/2/12"
    },
    {
      "date_id": 15,
      "activity_id": 20,
      "description": "Valentines Day (Gifted each other legos)",
      "day": "2025/2/12"
    },
    {
      "date_id": 16,
      "activity_id": 21,
      "description": "Ramen and Icecream date",
      "day": "2025/2/13"
    },
    {
      "date_id": 17,
      "activity_id": 20,
      "description": "Chorrera roadtrip, quick fam meetup",
      "day": "2025/2/15"
    },
    {
      "date_id": 17,
      "activity_id": 20,
      "description": "Go karts",
      "day": "2025/2/15"
    },
    {
      "date_id": 17,
      "activity_id": 21,
      "description": "Captain America movie",
      "day": "2025/2/15"
    },
    {
      "date_id": 17,
      "activity_id": 22,
      "description": "Xiao ya",
      "day": "2025/2/15"
    },
    {
      "date_id": 18,
      "activity_id": 23,
      "description": "Eating tacos",
      "day": "2025/2/19"
    },
    {
      "date_id": 18,
      "activity_id": 24,
      "description": "Talking about political hot takes",
      "day": "2025/2/19"
    },
    {
      "date_id": 19,
      "activity_id": 25,
      "description": "Lunch Chung's house",
      "day": "2025/2/20"
    },
    {
      "date_id": 20,
      "activity_id": 26,
      "description": "Meokja dinner con los panas",
      "day": "2025/2/21"
    },
    {
      "date_id": 20,
      "activity_id": 26,
      "description": "Chisme con Chonsy y Shirley",
      "day": "2025/2/21"
    },
    {
      "date_id": 21,
      "activity_id": 26,
      "description": "Starbucks drop off",
      "day": "2025/2/22"
    },
    {
      "date_id": 22,
      "activity_id": 27,
      "description": "Charlies creme",
      "day": "2025/2/26"
    },
    {
      "date_id": 22,
      "activity_id": 28,
      "description": "Bing chilling en mi casa, y la lleve a la ",
      "day": "2025/2/26"
    },
    {
      "date_id": 22,
      "activity_id": 29,
      "description": "Uber personal para la U",
      "day": "2025/2/26"
    },
    {
      "date_id": 23,
      "activity_id": 30,
      "description": "Desayuno fam de Chung, despues parking hasta que llego christian",
      "day": "2025/2/27"
    },
    {
      "date_id": 23,
      "activity_id": 31,
      "description": "Despues parking hasta que llego Christian",
      "day": "2025/2/27"
    },
    {
      "date_id": 24,
      "activity_id": 32,
      "description": "Parking con kelly y richard para airbnb",
      "day": "2025/3/3"
    },
    {
      "date_id": 25,
      "activity_id": 33,
      "description": "Parking con los sobris y prima",
      "day": "2025/3/4"
    },
    {
      "date_id": 25,
      "activity_id": 34,
      "description": "Becoming led zeppelin",
      "day": "2025/3/4"
    },
    {
      "date_id": 25,
      "activity_id": 35,
      "description": "Cuddles",
      "day": "2025/3/4"
    },
    {
      "date_id": 26,
      "activity_id": 36,
      "description": "Cafe unido, uñas, universidad, ajisen",
      "day": "2025/3/6"
    },
    {
      "date_id": 26,
      "activity_id": 37,
      "description": "Uñas day",
      "day": "2025/3/6"
    },
    {
      "date_id": 26,
      "activity_id": 38,
      "description": "Uber privado para la Universidad",
      "day": "2025/3/6"
    },
    {
      "date_id": 26,
      "activity_id": 39,
      "description": "ajisen",
      "day": "2025/3/6"
    },
    {
      "date_id": 26,
      "activity_id": 40,
      "description": "Movies at home ;)",
      "day": "2025/3/6"
    },
    {
      "date_id": 27,
      "activity_id": 41,
      "description": "Me trajo McFlurry a mi y a los chicos y le mostre los mad guitar skillz xd",
      "day": "2025/3/7"
    },
    {
      "date_id": 28,
      "activity_id": 43,
      "description": "Pasta date despues de la U",
      "day": "2025/3/11"
    },
    {
      "date_id": 28,
      "activity_id": 44,
      "description": "Te quiero mucho muchisimo",
      "day": "2025/3/11"
    },
    {
      "date_id": 28,
      "activity_id": 44,
      "description": "Quieres ser mi novia? ",
      "day": "2025/3/11"
    }
  ]

  const groupedData = mockData.reduce<Record<string, Record<string, Record<number, Activity[][]>>>>(
    (acc, current) => {
      const [year, month, day] = current.day.split("/");
      if (!acc[year]) {
        acc[year] = {};
      }
      if (!acc[year][month]) {
        acc[year][month] = {};
      }
      if (!acc[year][month][current.date_id]) {
        acc[year][month][current.date_id] = [[]];
      }
      acc[year][month][current.date_id][0].push(current);
      return acc;
    },
    {}
  );

  const groupedArray = Object.entries(groupedData).map(([year, months]) => ({
    year,
    months: Object.entries(months).map(([month, dates]) => ({
      month,
      dates: Object.values(dates).flat().sort((a, b) => {
        const [aYear, aDay, aMonth] = a[0].day.split("/");
        const [bYear, bDay, bMonth] = b[0].day.split("/");
        return parseInt(aDay) - parseInt(bDay);
      })
    }))
  }));

  return (
    <div className="mx-5">
      <Header text="Our Story" className="sticky-header mt-10"/>
      <DatesDisplay datesArray={groupedArray} />
    </div>
  )
}