import { Module } from '@nestjs/common';
import { PulsarModule } from '@jobber/pulsar';
import { ConfigModule } from '@nestjs/config';
import { FibonacciConsumer } from './fibonacci/fibonacci.consumer';

@Module({
  imports: [PulsarModule, ConfigModule.forRoot({ isGlobal: true })],
  providers: [FibonacciConsumer],
})
export class JobsModule {

}
