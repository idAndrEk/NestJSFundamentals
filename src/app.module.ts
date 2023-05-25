import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoffeesController } from "./coffees/coffees.controller";
import { CoffeesService } from "./coffees/coffees.service";
import { CoffeesModule } from "./coffees/coffees.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRoot("mongodb+srv://AndreyId:23717193@cluster0.trmpa.mongodb.net/?retryWrites=true&w=majority")
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
