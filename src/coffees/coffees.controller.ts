import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus, NotFoundException,
  Param,
  Post,
  Put,
  Query
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto/create-coffee.dto";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto/update-coffee.dto";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {
  }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    const coffee = this.coffeeService.findOne(id);
    if (!coffee) {
      // throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(createCoffeeDto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coffeeService.remove(id);
  }
}
