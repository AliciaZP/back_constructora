
const selectAllReports = () => {
    return db.query('SELECT * FROM reports');
};

const selectReportById = ( reportId ) => {
    return db.query('SELECT * FROM reports where id = ?', [ reportId ]);
};

const selectReportByType = ( type, constructions_id ) => {
    return db.query('SELECT * FROM reports where type = ? and Constructions_id = ?', [ type, constructions_id ]);
};

const selectReportByOrderDate = ( date, constructionId ) => {
    return db.query(`SELECT * FROM reports WHERE Constructions_id = ? ORDER BY date ${date} `, [ constructionId ]);
};



const createNewReporter = ({
    title,
    date,
    description,
    type,
    Constructions_id,
}) => {
    return db.query('insert into reports (title, date, description, type, Constructions_id) values ( ?, ?, ?, ?, ?)', 
    [ title, date, description, type, Constructions_id ]);
};

const updateReporterById = (
    reportId,
    {
        title,
        date,
        description,
        type,
        Constructions_id
    }
    ) => {
        return db.query('update reports set title = ?, date = ?, description = ?, type = ?, Constructions_id = ? where id = ?',
        [ title, date, description, type, Constructions_id, reportId ]
        )
    }
    
    const deleteReporterById = ( reportId ) => {
        return db.query('delete from reports where id = ?', [ reportId ]);
    };
    
    //Esta funcion se esta utilizando en el Model Constructions, no tiene ruta en reports
    const selectReportbyConstruction = ( constructionId ) => {
        return db.query('SELECT * FROM reports where Constructions_id = ?', [ constructionId ]);
    };

    //Esta funcion esta rescatando informcion de la tabla images, como solo vamos a mostrar las imagenes correspondientes al reporte, me parece mas logico mostrar los reportes con imagen y no mostralas por separado 
    const selectAllImages = ( reportId ) => {
        return db.query('SELECT * FROM images where Reports_id = ?', [ reportId ]);
    };
    
    module.exports = {
        selectReportbyConstruction,
        selectAllReports,
        createNewReporter,
        selectReportById,
        deleteReporterById,
        updateReporterById,
        selectAllImages,
        selectReportByType,
        selectReportByOrderDate
        
    }