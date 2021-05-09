﻿using Microsoft.EntityFrameworkCore;
using System;

namespace TravelAppServer.Models
{
    public class UsersContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public UsersContext(DbContextOptions<UsersContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");

            modelBuilder.Entity<User>().Property(u => u.Id).HasColumnType("int").UseMySqlIdentityColumn().IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Name).HasColumnType("nvarchar(45)").IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Age).HasColumnType("int").IsRequired();
        }
    }
}
//using Microsoft.EntityFrameworkCore;

//namespace TravelAppServer.Models
//{
//    public class UsersContext : DbContext
//    {
//        public DbSet<User> Users { get; set; }
//        public UsersContext(DbContextOptions<UsersContext> options)
//            : base(options)
//        {
//            Database.EnsureCreated();
//        }
//    }
//}
