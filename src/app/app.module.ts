import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { EnvSchema } from '../../env.schema';

@Module({
    imports: [
        SharedModule,
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: EnvSchema,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
