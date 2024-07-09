"use client";
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Calendar, Modal } from 'antd';
import type { CalendarProps } from 'antd';

// CSS styles
const eventItemStyle = {
  padding: '4px 8px', /* Padding */
  marginBottom: '4px', /* Bottom margin */
  cursor: 'pointer', /* Change cursor to pointer */
  fontSize: '12px', 
};

const FormCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const eventsData: Record<string, { type: string; description: string }[]> = {
    '2024-03-01': [{ type: 'meeting', description: 'Meeting with Client A' }, { type: 'todolist', description: 'To Do List' }],
    '2024-03-05': [{ type: 'event', description: 'Birthday Party' }],
    '2024-04-01': [{ type: 'meeting', description: 'Meeting at Japan' }, { type: 'todolist', description: 'Edit page todolist' }, { type: 'todolist', description: 'Edit page clss' }],
    '2024-04-25': [{ type: 'meeting', description: 'Meeting' }, { type: 'todolist', description: 'Edit' }, { type: 'event', description: 'party' }],

  };

  const getColorByEventType = (eventType: string): string => {
    switch (eventType) {
      case 'meeting':
        return 'red';
      case 'todolist':
        return 'yellow';
      default:
        return 'orange';
    }
  };

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const handleDateClick = (value: Dayjs) => {
    setSelectedDate(value);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  const cellRender = (value: Dayjs) => {
    const formattedDate = value.format('YYYY-MM-DD');
    const events = eventsData[formattedDate];
    
    return (
      <ul>
        {events && events.map((event, index) => (
          <li 
            key={index} 
            style={{
              ...eventItemStyle,
              backgroundColor: getColorByEventType(event.type)
            }}
            onClick={() => handleDateClick(value)}
          >
            {/* <span>{event.type}: </span> */}
            <span>{event.description}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Calendar onPanelChange={onPanelChange} cellRender={cellRender} />
      <Modal
        open={selectedDate !== null}
        title={selectedDate ? selectedDate.format('YYYY-MM-DD') : ''}
        onCancel={handleCloseModal}
        footer={null}
      >
        {selectedDate && eventsData[selectedDate.format('YYYY-MM-DD')] && (
          <ul>
            {eventsData[selectedDate.format('YYYY-MM-DD')].map((event, index) => (
              <li key={index}>
                <span>{event.type}: </span>
                <span>{event.description}</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </>
  );
};

export default FormCalendar;
