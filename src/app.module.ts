import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';


import TypeOrmConfig from './config/database.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [TypeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async(configService: ConfigService) => {
        const typeOrmConfig = configService.get('typeorm');
        return typeOrmConfig;
      }
    }),
    // JwtModule.register({
    //   global: true,
    //   signOptions: {expiresIn: '1h'},
    //   secret: process.env.JWT_SECRET,
    // })
  ],
  controllers: [],
  providers: [],
  
})
export class AppModule {}
