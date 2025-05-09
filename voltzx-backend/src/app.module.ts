import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LandsModule } from './lands/lands.module';
import { ProjectsModule } from './projects/projects.module';
import { ProposalsModule } from './proposals/proposals.module';
import { InvestmentsModule } from './investments/investments.module';
import { MonitoringModule } from './monitoring/monitoring.module';

@Module({
  imports: [UsersModule, LandsModule, ProjectsModule, ProposalsModule, InvestmentsModule, MonitoringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
