import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableActivity1631247639785 implements MigrationInterface {
    name = "CreateTableActivity1631247639785"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"locations\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, CONSTRAINT \"PK_7cc1c9e3853b94816c094825e74\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"activities\" (\"id\" SERIAL NOT NULL, \"date\" TIMESTAMP NOT NULL, \"title\" character varying NOT NULL, \"start_hour\" character varying NOT NULL, \"end_hour\" character varying NOT NULL, \"remaining_seats\" integer NOT NULL, \"locationId\" integer, CONSTRAINT \"PK_7f4004429f731ffb9c88eb486a8\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"bookings\" (\"id\" SERIAL NOT NULL, \"userId\" integer NOT NULL, \"value\" integer NOT NULL, \"modalityId\" integer NOT NULL, \"lodgeId\" integer, \"isPaid\" boolean NOT NULL DEFAULT false, CONSTRAINT \"UQ_38a69a58a323647f2e75eb994de\" UNIQUE (\"userId\"), CONSTRAINT \"PK_bee6805982cc1e248e94ce94957\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"activities_user\" (\"id\" SERIAL NOT NULL, \"activitiesId\" integer, \"userId\" integer, CONSTRAINT \"PK_b82f1d8368dd5305ae7e7e664c2\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_74b92be5924b9fb1d808b4ffcd4\" FOREIGN KEY (\"locationId\") REFERENCES \"locations\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"bookings\" ADD CONSTRAINT \"FK_a8075028cd998d862e10edccd43\" FOREIGN KEY (\"modalityId\") REFERENCES \"modalities\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"bookings\" ADD CONSTRAINT \"FK_f5e5928d899d30b8796624e0470\" FOREIGN KEY (\"lodgeId\") REFERENCES \"lodges\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"activities_user\" ADD CONSTRAINT \"FK_514fb68c4886956399c50b3b272\" FOREIGN KEY (\"activitiesId\") REFERENCES \"activities\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"activities_user\" ADD CONSTRAINT \"FK_86a633d170c578f2f930ece3271\" FOREIGN KEY (\"userId\") REFERENCES \"users\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"activities_user\" DROP CONSTRAINT \"FK_86a633d170c578f2f930ece3271\"");
      await queryRunner.query("ALTER TABLE \"activities_user\" DROP CONSTRAINT \"FK_514fb68c4886956399c50b3b272\"");
      await queryRunner.query("ALTER TABLE \"bookings\" DROP CONSTRAINT \"FK_f5e5928d899d30b8796624e0470\"");
      await queryRunner.query("ALTER TABLE \"bookings\" DROP CONSTRAINT \"FK_a8075028cd998d862e10edccd43\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_74b92be5924b9fb1d808b4ffcd4\"");
      await queryRunner.query("DROP TABLE \"activities_user\"");
      await queryRunner.query("DROP TABLE \"bookings\"");
      await queryRunner.query("DROP TABLE \"activities\"");
      await queryRunner.query("DROP TABLE \"locations\"");
    }
}
