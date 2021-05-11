using Microsoft.EntityFrameworkCore;
using System;

namespace TravelAppServer.Models
{
    public class TravelUsersContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }

        public TravelUsersContext(DbContextOptions<TravelUsersContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");

            modelBuilder.Entity<User>().Property(u => u.Id).HasColumnType("int").UseMySqlIdentityColumn().IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Name).HasColumnType("nvarchar(45)").IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Email).HasColumnType("nvarchar(45)").IsRequired();   
            modelBuilder.Entity<User>().Property(u => u.Password).HasColumnType("nvarchar(45)").IsRequired();   
            modelBuilder.Entity<User>().Property(u => u.Status).HasColumnType("nvarchar(45)").IsRequired();   
            
            
            modelBuilder.Entity<Country>().ToTable("Countries");

            modelBuilder.Entity<Country>().Property(u => u.Id).HasColumnType("int").UseMySqlIdentityColumn().IsRequired();
            modelBuilder.Entity<Country>().Property(u => u.Countryname).HasColumnType("nvarchar(45)").IsRequired();
            modelBuilder.Entity<Country>().Property(u => u.Rating).HasColumnType("double").IsRequired();
            modelBuilder.Entity<Country>().Property(u => u.NumberOfVoters).HasColumnType("int").IsRequired();      
            
            modelBuilder.Entity<Feedback>().ToTable("Feedbacks");

            modelBuilder.Entity<Feedback>().Property(u => u.Id).HasColumnType("int").UseMySqlIdentityColumn().IsRequired();
            modelBuilder.Entity<Feedback>().Property(u => u.Name).HasColumnType("nvarchar(45)").IsRequired();
            modelBuilder.Entity<Feedback>().Property(u => u.Email).HasColumnType("nvarchar(45)").IsRequired();
            modelBuilder.Entity<Feedback>().Property(u => u.Text).HasColumnType("nvarchar(45)").IsRequired();
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
