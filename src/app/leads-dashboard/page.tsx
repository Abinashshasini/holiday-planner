'use client';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import classes from './style.module.scss';

interface Leads {
  message: string;
  name: string;
  number: number;
  _id: string;
}

interface ApiResponse {
  message: string;
  statusCode: number;
  success: boolean;
  data: Leads[];
}

const filterArray = [
  {
    _id: 'all',
    text: 'All',
  },
  {
    _id: 'today',
    text: 'Today',
  },
  {
    _id: 'yesterday',
    text: 'Yesterday',
  },
];

const LeadsDashBoard = () => {
  /** Required states and refs */
  const [leads, setLeads] = useState<Leads[]>([]);
  const [activeFilter, setActiveFilter] = useState('');

  /** Function to fetch all leads */
  const handleFetchLeads = async (): Promise<void> => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(
        'https://holiday-planner-be.vercel.app/api/v1/leads/get-leads'
      );

      if (response.data.statusCode === 200) {
        setLeads(response.data.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  /** Effect to fetch all leads data */
  useEffect(() => {
    handleFetchLeads();
  }, []);

  return (
    <main className={classes.main}>
      <div className={classes.filterContainer}>
        {filterArray.map((element) => (
          <div className={classes.filterWrp} key={element._id}>
            <p>{element.text}</p>
          </div>
        ))}
      </div>
      <section>
        {leads?.length > 0 &&
          leads.map((element) => (
            <div key={element._id}>
              <h1>{element.name}</h1>
              <h2>{element.number}</h2>
              <h2>{element.message}</h2>
            </div>
          ))}
      </section>
    </main>
  );
};

export default LeadsDashBoard;
