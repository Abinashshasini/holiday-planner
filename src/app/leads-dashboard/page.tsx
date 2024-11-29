'use client';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { MdAddCall } from 'react-icons/md';
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
    _id: 'today',
    text: 'Today',
  },
  {
    _id: 'all',
    text: 'All',
  },
  {
    _id: 'yesterday',
    text: 'Yesterday',
  },
];

const LeadsDashBoard = () => {
  /** Required states and refs */
  const [leads, setLeads] = useState<Leads[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>('today');

  /** Function to fetch all leads */
  const handleFetchLeads = async (): Promise<void> => {
    setLoading(true);
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(
        `https://holiday-planner-be.vercel.app/api/v1/leads/get-leads?filter=${activeFilter}`
      );
      setLoading(false);
      if (response.data.statusCode === 200) {
        setLeads(response.data.data);
      }
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  /** Function to call Rishi */
  const handleCallUser = (number: number): void => {
    window.location.href = `tel:${number}`;
  };

  /** Effect to fetch all leads data */
  useEffect(() => {
    handleFetchLeads();
  }, [activeFilter]);

  return (
    <main className={classes.main}>
      <div className={classes.filterContainer}>
        {filterArray.map((element) => (
          <div
            className={classes.filterWrp}
            key={element._id}
            data-active={element._id === activeFilter}
            onClick={() => setActiveFilter(element._id)}
          >
            <p>{element.text}</p>
          </div>
        ))}
      </div>
      {leads && Array.isArray(leads) && (
        <div className={classes.totalCount}>
          <h3>{leads.length}</h3>
          <p>Total</p>
        </div>
      )}

      {(() => {
        if (loading) {
          return (
            <div className={classes.loaderContainer}>
              <div className={classes.loaderWrp}></div>
            </div>
          );
        }

        if (leads && Array.isArray(leads) && leads.length > 0) {
          return (
            <section className={classes.leadsCnt}>
              {leads.map((element) => (
                <div key={element._id} className={classes.leadsWrp}>
                  <div
                    className={classes.index}
                    onClick={() => handleCallUser(element.number)}
                  >
                    <MdAddCall />
                  </div>
                  <div className={classes.textWrp}>
                    <h2>{element.name}</h2>
                    <p>{element.number}</p>
                  </div>
                </div>
              ))}
            </section>
          );
        }

        return (
          <div className={classes.noDataText}>
            <p>No Data Available...</p>
          </div>
        );
      })()}
    </main>
  );
};

export default LeadsDashBoard;
