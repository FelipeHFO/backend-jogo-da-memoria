import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUsers1653927491204 implements MigrationInterface {
    name = 'createTableUsers1653927491204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tab_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_3549c9180861a537d2f4f60af3\` (\`username\`), UNIQUE INDEX \`IDX_bb98fe217c97f2975a8280ba69\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_bb98fe217c97f2975a8280ba69\` ON \`tab_users\``);
        await queryRunner.query(`DROP INDEX \`IDX_3549c9180861a537d2f4f60af3\` ON \`tab_users\``);
        await queryRunner.query(`DROP TABLE \`tab_users\``);
    }

}
