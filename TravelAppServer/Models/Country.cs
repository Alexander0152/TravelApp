﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelAppServer.Models
{
    public class Country
    {
        public int Id { get; set; }
        public string Countryname { get; set; }
        public double Rating { get; set; }
        public int NumberOfVoters { get; set; }
    }
}
