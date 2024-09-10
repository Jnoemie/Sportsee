import { UserGateway } from "./user-gateway"
import {  User } from '../../domain/models/type/user';
import {  UserActivity } from '../../domain/models/type/user-activity';
import { UserPerformance } from '../../domain/models/type/user-performance';
import { UserAverageSession } from "../../domain/models/type/user-average-session";

export class InMemoryUser implements UserGateway {
    getUserActivity(): Promise<UserActivity>{
      return Promise.resolve({
        userId: 12,
        sessions: [
        { day: "1", kilogram: 80, calories: 240 },
        { day: "2", kilogram: 80, calories: 220 },
        { day: "3", kilogram: 81, calories: 280 },
        { day: "4", kilogram: 81, calories: 290 },
        { day: "5", kilogram: 80, calories: 160 },
        { day: "6", kilogram: 78, calories: 162 },
        { day: "7", kilogram: 76, calories: 390 },
        { day: "8", kilogram: 77, calories: 168 },
        { day: "9", kilogram: 79, calories: 180 },
        { day: "10", kilogram: 75, calories: 192 }
        ],
      });
    }
    getUser(): Promise<User> {
        return Promise.resolve({
            id: 12,
            userInfos: {
              firstName: "Karl",
              lastName: "Dovineau",
              age: 31,
            },
            todayScore: 0.40,
            todayScorePercentage: 40,
            keyData: {
              calorieCount: 1930,
              proteinCount: 155,
              carbohydrateCount: 290,
              lipidCount: 50,
            },
          });
    }
    getUserPerformance(): Promise<UserPerformance> {
      return Promise.resolve({
        userId: 12,
        performanceData: [
            { kind: "Cardio", value: 80 },
            { kind: "Vitesse", value: 200 },
            { kind: "Energie", value: 120 },
            { kind: "Endurance", value: 140 },
            { kind: "Force", value: 50 },
          
            { kind: "Intensité", value: 90 },
        ],
    });
  }
 getUserAverageSession(): Promise<UserAverageSession> {
    return Promise.resolve({
      userId: 12,
      sessions: [
      { day: "L", sessionLength: 30, formattedSessionLength: "30 min" },
      { day: "M", sessionLength: 23, formattedSessionLength: "23 min" },
      { day: "M", sessionLength: 45, formattedSessionLength: "45 min" },
      { day: "J", sessionLength: 50, formattedSessionLength: "50 min" },
      { day: "V", sessionLength: 0, formattedSessionLength: "0 min" },
      { day: "S", sessionLength: 0, formattedSessionLength: "0 min" },
      { day: "D", sessionLength: 60, formattedSessionLength: "60 min" },
      ]
    });
  }

}