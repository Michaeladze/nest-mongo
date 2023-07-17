import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Post()
  async create(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.create(book);
  }

  @Put(':id')
  async findByIdAndUpdate(@Param('id') id: string, @Body() book: UpdateBookDto): Promise<Book> {
    return this.bookService.findByIdAndUpdate(id, book);
  }

  @Delete(':id')
  async findByIdAndDelete(@Param('id') id: string): Promise<Book> {
    return this.bookService.findByIdAndDelete(id);
  }
}
