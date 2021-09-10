import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Activity from "./Activity";
import User from "./User";

@Entity("activities_user")
export default class Activity_User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Activity, (activity: Activity) => activity.activities)
  activities: Activity;

  @ManyToOne(() => User, (user: User) => user.activity)
  user: User;
}
