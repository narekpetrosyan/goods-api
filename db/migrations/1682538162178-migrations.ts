import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1682538162178 implements MigrationInterface {
    name = 'Migrations1682538162178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`storage\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`address\` varchar(100) NOT NULL, \`country\` varchar(50) NOT NULL, \`state\` varchar(50) NOT NULL, \`city\` varchar(50) NOT NULL, \`phone\` varchar(20) NOT NULL, \`capacity\` decimal(10,2) NOT NULL DEFAULT '0.00', \`storageId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`good\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(500) NOT NULL, \`category\` varchar(50) NOT NULL, \`price\` decimal(10,2) NOT NULL DEFAULT '0.00', \`brand\` varchar(50) NOT NULL, \`quantity\` int NOT NULL, \`storageId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`purchase\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` datetime NOT NULL, \`quantity\` int NOT NULL, \`price\` decimal(10,2) NOT NULL DEFAULT '0.00', \`goodId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`storage\` ADD CONSTRAINT \`FK_a5af5499dc39faba82af9bd7990\` FOREIGN KEY (\`storageId\`) REFERENCES \`storage\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`good\` ADD CONSTRAINT \`FK_3a33ddf8eeeda72fbb69e478f55\` FOREIGN KEY (\`storageId\`) REFERENCES \`storage\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_f9f2e5b0777726d67c11940f937\` FOREIGN KEY (\`goodId\`) REFERENCES \`good\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_f9f2e5b0777726d67c11940f937\``);
        await queryRunner.query(`ALTER TABLE \`good\` DROP FOREIGN KEY \`FK_3a33ddf8eeeda72fbb69e478f55\``);
        await queryRunner.query(`ALTER TABLE \`storage\` DROP FOREIGN KEY \`FK_a5af5499dc39faba82af9bd7990\``);
        await queryRunner.query(`DROP TABLE \`purchase\``);
        await queryRunner.query(`DROP TABLE \`good\``);
        await queryRunner.query(`DROP TABLE \`storage\``);
    }

}
