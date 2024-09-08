CREATE DATABASE IF NOT EXISTS eventos;

USE eventos;

CREATE TABLE IF NOT EXISTS eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    detalhes TEXT NOT NULL,
    data DATE NOT NULL,
    local VARCHAR(255) NOT NULL,
    numIngressos INT NOT NULL,
    valorIngresso DECIMAL(10,2) NOT NULL
);

INSERT INTO eventos (nome, detalhes, data, local, numIngressos, valorIngresso)
VALUES 
  ('Festival de Verão', 'Um grande festival de música ao ar livre.', '2024-12-15', 'Praia Grande', 500, 100.00),
  ('Seminário de Tecnologia', 'Discussão sobre as novas tendências tecnológicas.', '2024-11-20', 'Centro de Convenções', 300, 50.00),
  ('Feira de Artesanato', 'Exposição e venda de produtos artesanais.', '2024-10-01', 'Parque Municipal', 200, 20.00),
  ('Show de Rock', 'Show com várias bandas locais de rock.', '2024-09-25', 'Estádio Municipal', 1000, 150.00),
  ('Congresso de Saúde', 'Discussão sobre inovações na área da saúde.', '2024-11-10', 'Hotel Central', 400, 75.00),
  ('Maratona Solidária', 'Evento esportivo para arrecadar fundos para caridade.', '2024-12-01', 'Avenida Principal', 600, 30.00),
  ('Exposição de Carros Antigos', 'Exposição de veículos clássicos e antigos.', '2024-10-15', 'Centro Histórico', 150, 60.00),
  ('Workshop de Fotografia', 'Aula prática sobre técnicas fotográficas.', '2024-09-10', 'Galeria de Arte', 50, 120.00),
  ('Festa de Ano Novo', 'Grande celebração de Réveillon.', '2024-12-31', 'Praça Central', 2000, 80.00),
  ('Palestra Motivacional', 'Evento com palestrantes renomados para inspirar o público.', '2024-11-05', 'Auditório Municipal', 250, 40.00);

--SELECT * FROM eventos;
