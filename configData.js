

  
  
      function loadTable( object ){
        const formattedCols = object.headers.map( header =>{ return {'title': header } });
        new DataTable("#usersTable", {
            language: {
          url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-CL.json',
      },
      
       responsive: {
                details: {
                    type: 'column',
                    target: 'tr'
                }
            },
       dom: 'Bfrtip',
            buttons: {
              dom: {
                button: {
                  tag: 'button',
                  className: ''
                }
              },
              buttons: [
                {
                  text: 'Crear',
                  action: function(e,dt,node,config){
                    alert('Solicita autorización');
                  },
                  className: 'btn btn-primary'
                },
                {
                  extend: 'copy',
                  text: '<i class="bi bi-clipboard-fill"></i>',
                  titleAttr: 'Copiar',
                  className: 'btn btn-secondary'
                },
                {
                  extend: 'excel',
                  text: '<i class="bi bi-file-earmark-excel-fill"></i>',
                  titleAttr: 'Exportar a excel',
                  className: 'btn btn-success'
                },
                {
                  extend: 'pdf',
                  text: '<i class="bi bi-file-earmark-pdf-fill"></i>',
                  titleAttr: 'Exportar a pdf',
                  className: 'btn btn-danger'
                },
                {
                  extend: 'print',
                  text: '<i class="bi bi-printer-fill"></i>',
                  titleAttr: 'Imprimir',
                  className: 'btn btn-info'
                },
                {
                  extend: 'colvis',
                  text: 'Filtrar columnas',
                  className: 'btn btn-secondary'
                },
  
              ]
            },
      //responsive: true,
      order: [[0, 'desc']], /* para ordenar los datos en funcion a una columna */
         columnDefs: [
          {responsivePriority: 9,targets: 0 },
          {responsivePriority: 2,targets: 1 },
           {responsivePriority: 8,targets: 2 },
           {responsivePriority: 3,targets: 3 },
          {responsivePriority: 7,targets: 4 },
          {responsivePriority: 1,targets: 5 },
          {responsivePriority: 1,targets: 8 },
          {responsivePriority: 1,targets: 9 },
          {
              target: 6,
              visible: false,
              searchable: false
          },
          {
              target: 2,
              visible: false,
                searchable: false
          },
          {
            target:8,
            render: function(data, type, userRow){
              let classColor = 'text-success';
              if (userRow [8] == 'Versus' ){ classColor= 'text-danger'}
              if (userRow [8] == 'Valdishopper' ){ classColor= 'text-primary'}
              if (userRow [8] == 'Movicity' ){ classColor= 'text-warning'}
              return `<span class=${classColor}>${data}</span>`
            }
          },
            {
            target:12,
            render: function(data, type, userRow){
              let classColor = 'text-success';
              if (userRow [12] >  '0:20' ){ classColor= 'text-danger'}
              if (userRow [12] == '0:16' ){ classColor= 'text-warning'}
              if (userRow [12] == '0:17' ){ classColor= 'text-warning'}
              if (userRow [12] == '0:18' ){ classColor= 'text-warning'}
              if (userRow [12] == '0:19' ){ classColor= 'text-warning'}
            
              return `<span class=${classColor}>${data}</span>`
            }
          },
           {
              target: 13,
              visible: false,
                searchable: false
          },
            {
              target: 14,
              visible: false,
                searchable: false
          },
            {
              target: 15,
              visible: false,
              searchable: false
          },
            {
              target: 17,
              visible: false,
                searchable: false
          },
          
            {
              target: 16,
              className:"d-flex justify-content-center"
          },
      ],
  
  
  
  
  
          lengthMenu: [10,20,25,50],
  
  
          columns: formattedCols,
          data: object.usersInfo,
        })
      }
     
  