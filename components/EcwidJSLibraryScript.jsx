'use client'
import React, { useEffect } from 'react';

const EcwidJSLibraryScript = () => {
  useEffect(() => {
    // Ecwid script
    const ecwidScript = document.createElement('script');
    ecwidScript.type = 'text/javascript';
    ecwidScript.src = 'https://app.ecwid.com/script.js?30876003&data_platform=code&data_date=2024-01-15';
    ecwidScript.charset = 'utf-8';
    document.body.appendChild(ecwidScript);
  }, []);

  return ;
};

export default EcwidJSLibraryScript;